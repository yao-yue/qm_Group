import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

var Store = {
    _flag: false,
    _handlers: [],
    subscribe: function(handler) {
        this._handlers.push(handler);
    },
    set: function(value) {
        this._flag = value;
        this._handlers.forEach(handler => handler(value));
    },
    get: function() {
        return this._flag;
    }
}

// onChange 调用 Store的set(!value)
function Switcher({value, onChange}) {
    return (
        <button onClick={e=> onChange(!value)}>     
            {value? 'light on': 'light off'}
        </button>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Store.get()
        }
        Store.subscribe((value) => {
            this.setState({value,})   //引起重新渲染的核心代码
        })
    }
    render() {
        return (
            <div>
                <Switcher value={this.state.value} onChange={Store.set.bind(Store)}></Switcher>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));