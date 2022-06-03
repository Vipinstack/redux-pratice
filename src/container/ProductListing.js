import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from './ProductDetails';

const ProductListing = () => {
    const product = useSelector((state)=>state);
    
  return (
    <div>
        <ProductDetails />
    </div>
  )
}

export default ProductListing