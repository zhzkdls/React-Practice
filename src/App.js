import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapContainers from "./components/MapContainers";
import MapContainerse from "./components/MapContainerse";
import MapContainerses from "./components/MapContainerses";

import OnMouseOver from "./components/on/OnMouseOver";
import Reactstrap from "./components/reactstrap/Reactstrap";
import Sweetalert from "./components/Sweetalert/Sweetalert";

import NavBara from "./layout/NavBara";
import { Home } from "./pages/Home";




function App() {
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

        {/* <Route path="/bo" element={<MapContainerse />} />
        <Route path="/bo" element={<MapContainerse />} />
        <Route path="/bo" element={<MapContainerse />} />

        <Route path="/bo" element={<MapContainerse />} />
        <Route path="/bo" element={<MapContainerse />} />
        <Route path="/bo" element={<MapContainerse />} />
        <Route path="/bo" element={<MapContainerse />} />
        <Route path="/bo" element={<MapContainerse />} /> */}
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;