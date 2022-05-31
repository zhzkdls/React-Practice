import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import NavBara from "../layout/NavBara";
import MapContainers from "../components/MapContainers";
import MapContainerse from "../components/MapContainerse";
import MapContainerses from "../components/MapContainerses";
import OnMouseOver from "../components/on/OnMouseOver";
import Sweetalert from "../components/Sweetalert/Sweetalert";
import Reactstrap from "../components/reactstrap/Reactstrap";
import CookieSave from "../components/cookie/CookieSave";

function Day1() {

  return (
    <BrowserRouter>
      <NavBara />
      <Routes>
      
        <Route path="/" element={<Home />} /> 
        <Route path="/ao" element={<MapContainers />} />
        <Route path="/bo" element={<MapContainerse />} />
        <Route path="/co" element={<MapContainerses />} />

        <Route path="/do" element={<OnMouseOver />} />
        <Route path="/eo" element={<Sweetalert />} />
        <Route path="/fo" element={<Reactstrap />} />

        <Route path="/go" element={<CookieSave />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default Day1;