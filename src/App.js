import React from "react";
import Header from "./container/Header";
import {Routes, Route} from 'react-router-dom'
import ProductListing from "./container/ProductListing";
import ProductDetails from "./container/ProductDetails";


function App() {
  return (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="/product/:productsId" element={<ProductDetails />} />
      <Route>Not Found !!</Route>
    </Routes>
  </div>
  )
}

export default App;
