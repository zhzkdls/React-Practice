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
import R041_ReactstrapCarousel from './components/R041_ReactstrapCarousel';
import R042_ReactstrapCollapse from './components/R042_ReactstrapCollapse';
import R043_ReactstrapFade from './components/R043_ReactstrapFade';
import R044_ReactstrapForm from './components/R044_ReactstrapForm';
import R045_ReactstrapInputGroup from './components/R045_ReactstrapInputGroup';
import R046_ReactstrapJumbotron from './components/R046_ReactstrapJumbotron';
import R047_ReactstrapListGroup from './components/R047_ReactstrapListGroup';
import R048_ReactstrapModal from './components/R048_ReactstrapModal';
import R049_ReactstrapNavbar from './components/R049_ReactstrapNavbar';
import R050_ReactstrapPagination from './components/R050_ReactstrapPagination';
import R051_ReactstrapPopover from './components/R051_ReactstrapPopover';
import R052_ReactstrapProgress from './components/R052_ReactstrapProgress';
import R053_ReactstrapSpinner from './components/R053_ReactstrapSpinner';
import R054_ReactstrapTable from './components/R054_ReactstrapTable';
import R055_ReactstrapTab from './components/R055_ReactstrapTab';

import R056_Sweetalert2Basic from './components/R056_Sweetalert2Basic';
import R057_Sweetalert2Position from './components/R057_Sweetalert2Position';
import R058_Sweetalert2Confirm from './components/R058_Sweetalert2Confirm';

import R059_FetchGet from './components/R059_FetchGet';
import R060_FetchPost from './components/R060_FetchPost';
import R061_AxiosGet from './components/R061_AxiosGet';
import R062_AxiosPost from './components/R062_AxiosPost';

// import R063_CallbackFunc from './components/R063_CallbackFunc';
// import R064_Promise from './components/R064_Promise';
// import R065_Promise from './components/R064_Promise';





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
      <R041_ReactstrapCarousel/>
      <R042_ReactstrapCollapse/>
      <R043_ReactstrapFade/>
      <R044_ReactstrapForm/>
      <R045_ReactstrapInputGroup/>
      <R046_ReactstrapJumbotron/>
      <R047_ReactstrapListGroup/>
      <R048_ReactstrapModal/>
      <R049_ReactstrapNavbar/>
      <R050_ReactstrapPagination/>
      <R051_ReactstrapPopover/>
      <R052_ReactstrapProgress/>
      <R053_ReactstrapSpinner/>
      <R054_ReactstrapTable/>
      <R055_ReactstrapTab/>

      <R056_Sweetalert2Basic/>
      <R057_Sweetalert2Position/>
      <R058_Sweetalert2Confirm/>

      <R059_FetchGet/>
      <R060_FetchPost/>
      <R061_AxiosGet/>
      <R062_AxiosPost/>

      {/* <R063_CallbackFunc/>
      <R064_Promise/>
      <R065_Promise/> */}
    </div>
  );
}

export default App;