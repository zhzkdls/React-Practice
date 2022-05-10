import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import SetState from './SetState'
import ComponentClass from './components/ComponentClass'
import ReturnMap from './components/ReturnMap'

import ImportConponent from './components/ImportConponent';
import LifecycleEx from './components/LifecycleEx';
import FunctionComponent from './components/FunctionComponent';
import ReactHook from './components/ReactHook';

import ReactstrapBreadcrumbs from './components/ReactstrapBreadcrumbs'
import ReactstrapBadges from './components/ReactstrapBadges';
import ReactstrapAlerts from './components/ReactstrapAlerts'
import ReactstrapDropdown from './components/ReactstrapDropdown';
import ReactstrapButtonGroup from './components/ReactstrapButtonGroup'
import ReactstrapBottons from './components/ReactstrapBottons'
import ReactstrapCard from './components/ReactstrapCard'





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
      <ReactstrapDropdown/>
      <ReactstrapButtonGroup/>
      <ReactstrapBottons/>
      <ReactstrapCard/>
    </div>
  );
}

export default App;