import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from './components/Counter';
import counter from './reducers';   //reducers专门生成状态的

// ReactDOM.render((<div>{store.getState()}</div>), document.getElementById('root'));

// 单独管理状态的地方
// 状态是与ui的表现关联  状态计算器reducer
const store = createStore(counter);
const rootEl = document.getElementById('root');
const render = () => ReactDOM.render(<Counter value={store.getState()}
    onIncrement={() => store.dispatch({
        type: 'INCREMENT'
    })}
    onDecrement={() => store.dispatch({
        type: 'DECREMENT'
    })} />, rootEl)
render();
store.subscribe(render)

serviceWorker.unregister();
