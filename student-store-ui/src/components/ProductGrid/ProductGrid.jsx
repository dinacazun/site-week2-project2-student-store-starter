import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products, handleAddItemToCart, handleRemoveItemFromCart}) {
  return (
    <div className = "product-grid">
      {/* {products && products.map((products) => (
        <ProductCard products={products}
        key={products.id}/> 
      ))} */}
      {console.log(products)}
      {products.map((item) => (
          <ProductCard products = {item} key = {item.id} showDescription = {false}/>
        ))}
    </div>
  )
}