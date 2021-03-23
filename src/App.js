/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { Dashboard } from './pages/dashboard/dashboard.view';
import LogOutPage from './pages/logOutPage';

const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/abyss">
          <LogOutPage />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
