import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import MainNav from "./Components/layout/MainNav";
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
      </Routes>
      </div>
     
  );
}

export default App;
