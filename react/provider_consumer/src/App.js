// 要将APP hoc一下  才能拿到provider的值;

import React, { Component } from 'react'
import { filmACtion } from "./actions";
import { connect } from 'react-redux'

// redux 负责解决films api    使用action
// action 应该由组件来触发  

class App extends Component {
    componentDidMount () {
        //符合redux的设计模式
        this.props.getFilmData();
    }
    render () {
        return (
            <div>
                <ul>
                    {
                        this.props.films.map((film, index) => {
                            return <li key={index}>
                                <h2>{film.name}</h2>
                                <img src={film.poster} alt={film.name}/>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
//从store拿出要的状态
const mapStateToProps = (state) => {
    return {
        films: state.films
    }
}
//异步问题
const mapDispatchToProps = (dispatch) => {
    return {
        getFilmData: () => {
            //Actions must be plain objects. Use custom middleware for async actions.
            //动作必须是一个普通对象，使用中间件对于异步动作
            // dispatch({type:'', payload:''})  同步动作
            // filmACtion(dispatch) ==》 对象   
            // 异步  需要先去请求再去修改对象
            dispatch(() => {
                filmACtion(dispatch)
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(App)    //将context的东西转手给ApP

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// mapStateToProps：
// [mapStateToProps(state, [ownProps]): stateProps] (Function): 如果定义该参数，
// 组件将会监听 Redux store 的变化。任何时候，只要 Redux store 发生改变，mapStateToProps 
// 函数就会被调用