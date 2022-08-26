import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import MainNav from "./Components/layout/MainNav";
import Details from './Components/sesions/Details';
import AllProductsPage from "./Pages/AllProducts";
import CosCumparaturi from "./Pages/CosCumparaturi";
import NewProductsPage from "./Pages/Oferte";



function App() {

  return (
    
    <div>
      <MainNav  />
      <Routes>
      <Route path="/" exact element={<AllProductsPage />} />
      <Route path="/Cos" element={<CosCumparaturi />} />
      <Route path="/Oferte" element={<NewProductsPage />} />
      <Route path="/:ID" element={<Details/>} />
      </Routes>
      </div>
     
  );
}

export default App;
