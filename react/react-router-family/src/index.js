import React  from 'react';
import ReactDOM from 'react-dom';
import { TranstionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route, Link, withRouter , Redirect } from 'react-router-dom'

const fakeAuth = {
    //登录态
    isAuthenticated: false,
    //登录功能
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb,1000);
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 1000);
    }
}
// 鉴权
function AuthExample () {
    return (
        <Router>
            <div>
                {/* 不用 exact 不严格匹配   让任何地方都会出现这个组件 */}
                {/* <Route path="/" component={AuthButton} />  */}
                <AuthButton  />
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/protected">Protected Page</Link>
                    </li>
                </ul>
                <Route path="/public" component={Public} /> 
                <Route path="/login" component={Login} /> 
                <PrivateRoute path="/protected" component={Protected} /> 
            </div>
        </Router>
    )
}
// withRouter 让你的组件外面罩一个Route
// 装饰   适用于一些简单的需要路由的功能的history match location
const  AuthButton = withRouter(({history}) => {
    return fakeAuth.isAuthenticated ? ( <p>Welcome! <button onClick={() => {fakeAuth.signout(() => {
        // Redirect ? 
        // js 并非 jsx 输出
        //push  入栈一下  换页面
        history.push('/')

    })}}>Sign out</button> </p> ) : ( <p>You are not logged in.</p> )
})

function Public() {
    return (
        <div>Public</div>
    );
}
function Protected() {
    return (
        <div>Protected</div>
    );
}
// 返回路由的组件 
//路由+render 立刻渲染
function PrivateRoute ({component: Component, ...rest}) {
    return (
        <Route {...rest} render={
            //history location match 吉祥三包 props
            props => fakeAuth.isAuthenticated ? (
                <Component/>
            ) : (
                <Redirect to={{
                    pathname: "/login", 
                    // 登录完要跳回来
                    state: {from: props.location}   
                }} />
            )
        }/>
    );
}
class Login extends React.Component {
    state = {
        //Referrer 推荐人
        redirectToReferrer: false
    }
    login =()=>{
        console.log('auth success!')
        fakeAuth.authenticate(() => { //回调函数
            this.setState({
                redirectToReferrer: true
            })
        });
    }
    render() {
        let redirectToReferrer = this.state.redirectToReferrer;
        let { from } = this.props.location.state || {from: { pathname: '/'} };
        // 在render的时候采用 if else 来判定return哪个
        if ( redirectToReferrer ) return <Redirect to={from}/>
        else {
            return (
                <div style={{background: "yellow"}}>
                    <p>You must log in to view the page at {from.pathname} </p>
                    <button onClick={this.login}>Login</button>
                </div>
            )
        }
    }
}


ReactDOM.render(<AuthExample />, document.getElementById('root'))
