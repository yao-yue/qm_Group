import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Router 路由   Route 路由配置项
import './index.css';
import Beer from './Beer/Beer';
import Single from './Beer/Single';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <div>
            {/* 首页/只匹配这一次  精准匹配exact非模糊匹配 */}
            <Route exact path="/" component={Beer} />
            {/* /:   带动态数据  匹配到这个页面时会再加载一次页面 */}
            <Route exact path="/search/:searchTerm" component={Beer} />
            <Route exact path="/beer/:beerId/:beerSlug" component={Single} />
        </div>
    </Router>
    , document.getElementById('root'));


serviceWorker.unregister();
