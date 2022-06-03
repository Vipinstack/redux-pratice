import React from 'react'
import { useSelector } from 'react-redux'
const ProductDetails = () => {
    const products = useSelector((state)=>state.AllProducts.products);
    const {id, title} =products[0]

  return (
    <div>{title}</div>
  )
}

export default ProductDetails