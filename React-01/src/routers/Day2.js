import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// css
import '../css/new.css';

// header
import HeaderAdmin from "../components/Header/HeaderAdmin";

// footer
import Footer from '../components/Footer/Footer';

// router
import ReactRouter from "../components/Router/ReactRouter";
import ReactRouter2 from "../components/Router/ReactRouter2";

function Day1() {

  return (
    <BrowserRouter>
      <HeaderAdmin/> 
      <Routes>
          {/* 에러발생 라우터 파일이 나오지 않음?? 내일 해결함 */}
        <Route exact path='/' component={ReactRouter} />{
        <Route exact path='/reactRouter2' component={ReactRouter2} />}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Day1;