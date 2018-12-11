import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom'

function PreventingTransitionExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Form</Link>
                    </li>
                    <li>
                        <Link to="/one">One</Link>
                    </li>
                    <li>
                        <Link to="/two">Two</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Form} />
                <Route path="/one" exact component={One} />
                <Route path="/two" exact component={Two} />
            </div>
            
        </Router>
    );
}

class Form extends Component {
    state = { isBlocking: false }
    componentWillUnMount () {
        console.log('unmount~~');
    }
    render() {
        let { isBlocking } = this.state;
        return (
            <form
                onSubmit={event => {
                    event.preventDefault();
                    console.log(event.target)
                    event.target.reset();
                    this.setState({
                        isBlocking: false,
                    })
                }}>
                <Prompt when={isBlocking} message={ location => `Are you sure you want to go to ${location.pathname}` }/>
                <p>
                    <input type="text" size="50" placeholder="type somthing to broke transitions"
                        onChange={event => {
                            this.setState({
                                isBlocking: event.target.value.trim().length > 0,                           
                            })
                        }} />
                </p>
                <p>
                    <button type="submit">Submit to stop blocking</button>
                </p>
            </form>
        )
    }
}

const One = () => {
    return (
        <div>One</div>
    )
}
const Two = () => {
    return (
        <div>Two</div>
    )
}

ReactDOM.render(<PreventingTransitionExample />, document.getElementById('root'))
