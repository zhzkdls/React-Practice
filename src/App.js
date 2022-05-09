import React from 'react';
import './App.css';
import SetState from './SetState'
import ComponentClass from './ComponentClass'
import ReturnMap from './ReturnMap'

import ImportConponent from './components/ImportConponent';
import LifecycleEx from './components/LifecycleEx';
import FunctionComponent from './components/FunctionComponent';
import ReactHook from './components/ReactHook';

import ReactstrapBreadcrumbs from './ReactstrapBreadcrumbs'
import ReactstrapBadges from './ReactstrapBadges';
import ReactstrapAlerts from './ReactstrapAlerts'
import 'bootstrap/dist/css/bootstrap.css'





function App() {
  return (
    <div>
      <h1>choma React</h1>
      <p>CSS 적용하기</p>
      <ImportConponent />
      <LifecycleEx />
      <SetState/>
      <ComponentClass/>
      <FunctionComponent contents="[ THIS IS FunctionComponent ]"/>
      <ReactHook/>
      <ReturnMap/>
      <ReactstrapAlerts/>
      <ReactstrapBadges/>
      <ReactstrapBreadcrumbs/>
    </div>
  );
}

export default App;