import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import SetState from './components/SetState'
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
import ReactstrapCarousel from './components/ReactstrapCarousel';
import ReactstrapCollapse from './components/ReactstrapCollapse';
import ReactstrapFade from './components/ReactstrapFade';
import ReactstrapForm from './components/ReactstrapForm';
import ReactstrapInputGroup from './components/ReactstrapInputGroup';
import ReactstrapJumbotron from './components/ReactstrapJumbotron';
import ReactstrapListGroup from './components/ReactstrapListGroup';
import ReactstrapModal from './components/ReactstrapModal';
import ReactstrapNavbar from './components/ReactstrapNavbar';
import ReactstrapPagination from './components/ReactstrapPagination';
import ReactstrapPopover from './components/ReactstrapPopover';
import ReactstrapProgress from './components/ReactstrapProgress';
import ReactstrapSpinner from './components/ReactstrapSpinner';
import ReactstrapTable from './components/ReactstrapTable';
import ReactstrapTab from './components/ReactstrapTab';

import Sweetalert2Basic from './components/Sweetalert2Basic';
import Sweetalert2Position from './components/Sweetalert2Position';
import Sweetalert2Confirm from './components/Sweetalert2Confirm';
import onClick from './components/day2/onClick';
import onChange from './components/day2/onChange';
import onMouseMove from './components/day2/onMouseMove';
import onMouseOver from './components/day2/onMouseOver';
import onMouseOut from './components/day2/onMouseOut';

// import FetchGet from './components/R059_FetchGet';
// import FetchPost from './components/R060_FetchPost';
// import AxiosGet from './components/R061_AxiosGet';
// import AxiosPost from './components/R062_AxiosPost';

// import CallbackFunc from './components/R063_CallbackFunc';
// import Promise from './components/R064_Promise';
// import Promises from './components/Promises';





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
      <ReactstrapCarousel/>
      <ReactstrapCollapse/>
      <ReactstrapFade/>
      <ReactstrapForm/>
      <ReactstrapInputGroup/>
      <ReactstrapJumbotron/>
      <ReactstrapListGroup/>
      <ReactstrapModal/>
      <ReactstrapNavbar/>
      <ReactstrapPagination/>
      <ReactstrapPopover/>
      <ReactstrapProgress/>
      <ReactstrapSpinner/>
      <ReactstrapTable/>
      <ReactstrapTab/>

      <Sweetalert2Basic/>
      <Sweetalert2Position/>
      <Sweetalert2Confirm/>

      {/* <FetchGet/>
      <FetchPost/>
      <AxiosGet/>
      <AxiosPost/> */}

      {/* <CallbackFunc/>
      <Promise/>
      <Promises/> */}

      <onClick />
      <onChange />
      <onMouseMove />
      <onMouseOver/>
      <onMouseOut />
    </div>
  );
}

export default App;