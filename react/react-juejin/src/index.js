//入口文件  app.js 根文件

import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App/App';
import './index.css'
import 'element-theme-default';
import { Provider } from 'react-redux'
import store from './redux/store/store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

