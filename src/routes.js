import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ViewModulesPage from './components/modules/ViewModulesPage';
import PagesList from './components/pages/PagesList';
import ComponentsList from './components/components/ComponentsList';
import TestCasesList from './components/testcases/TestCasesList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ViewModulesPage}/>
    <Route path="modules" component={ViewModulesPage}/>
    <Route path="pages" component={PagesList}/>
    <Route path="pages/:module" component={PagesList}/>
    <Route path="components" component={ComponentsList}/>
    <Route path="components/:page" component={ComponentsList}/>
    <Route path="testcases" component={TestCasesList}/>
    <Route path="testcases/:component" component={TestCasesList}/>
  </Route>
);
