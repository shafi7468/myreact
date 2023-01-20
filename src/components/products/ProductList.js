import React from 'react'
import Product from './Product'
import products from "./products.json";


export default function ProductList() {
    
  return (
    <>  
     {products.map((product) => {
            return <Product prod={product} key={product.id} />;
          })}
    </>
  )
}
