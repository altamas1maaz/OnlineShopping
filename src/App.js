import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import SingleProduct from "./pages/SingleProduct";

import Products from "./components/Products";

function App() {
  return (
    <div className="App">
       <Header/>
       <Banner/>
       <Categories/>
       <Products/>
     <Routes>
      <Route path="/" element={<Home/>}  />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/signup" element={<SignUp/>} />
      <Route path="SingleProduct/:id" element={<SingleProduct/>} />
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
