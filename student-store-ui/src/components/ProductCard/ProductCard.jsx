import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({products, productId, quantity, addToCart, removeToCart, showDescription}) {
  if(showDescription ? true : false){
    <h4 className = "product-description">{products.description}</h4>
  }
  return (
    <div className = "product-card">
      <div className = "media">
        <Link to = "/products/:productId">
          <img src = {products.image}/>
        </Link>
      </div>
      <p className = "product-name">{products.name}</p>
      <p className = "product-price">${products.price}</p>
      <button className = "add" onClick = {()=>addToCart(products)}>+</button>
      <button className = "remove" onClick = {()=>removeToCart(products)}>-</button>
      {/* <div className="cartItem-btn" onClick={()=>removeItemFromCart(product)}>-</div> */}
      {/* <p className = "product-quantity"></p> */}
    </div>
  )
}