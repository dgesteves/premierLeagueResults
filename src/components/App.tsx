import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Weeks from './Weeks';
import Team from './Team';
import Table from './Table';

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/weeks/:id" component={Weeks} />
          <Route path="/teams/:id" component={Team} />
          <Route path="/table" component={Table} />
          <Redirect from="/" to="/weeks/1" />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
