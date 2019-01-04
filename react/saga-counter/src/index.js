import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import Counter from './Counter'
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(reduxLogger));
const action = type => store.dispatch({ type })

// 因为在UI业务中的异步超过了redux的范围、如果强行用定时器违反了redux的设计原则

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
    />,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)
