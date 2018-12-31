import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from '../redux'
//Provider 只需用一次， 全局context定义的功能
const state = {
    head: 'This is global head!',
    body: 'This is global body!',
    headBtn: 'm head',
    bodyBtn: 'm body'       
}

ReactDOM.render(
    <Provider store={state}>
        <App />
    </Provider>
    , document.getElementById('root'))