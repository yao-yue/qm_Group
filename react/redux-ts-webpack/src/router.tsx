import  * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { App } from './app';
import { About, MembersPage } from './components';

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="container-fluid">
        <Route component={App}/>
        <Switch>
          <Route exact path='/' component={About}/>
          <Route path='/about' component={About}/>
          <Route path='/memebers' component={MembersPage}/>
        </Switch>
      </div>
    </HashRouter>
  );
}
