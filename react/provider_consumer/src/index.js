import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import { createStore, combineReducers } from 'redux';
import axios from 'axios'   

// provider store => Component => dispatch => store
// 同步的  action  async


const reducers = combineReducers({
    //一个分支
    films: (state = [], action) => {
        let { type, payload } = action;
        switch(type) {
            case 'GET_FILM_DATA': 
                var newS = [...state, ...payload]; // 翻页的时候这个数据是有用的
                newS = payload;
                return newS;
            default: 
                return state;
        }
    },

})

const store = createStore(reducers);  
// createStore(reducer, [preloadedState], enhancer)
//1. reducer (Function): reducer(state,action)接收两个参数，分别是当前的 state 树和要处理的 action，返回新的 state 树。
//2. [preloadedState] (any): 初始时的 state。
//3. enhancer (Function): Store enhancer 是一个组合 store creator 的高阶函数，返回一个新的强化过的 store creator。


function renderPage () {
    ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}
renderPage()
store.subscribe(renderPage);
