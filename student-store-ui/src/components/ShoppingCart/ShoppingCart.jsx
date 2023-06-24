// import * as React from "react"
// import "./ShoppingCart.css"

// export default function ShoppingCart({isOpen, products, shoppingCart}) {
//   return (
//     <div className="shopping-cart">
//       <h1>Shopping Cart</h1>
//       {shoppingCart.map((item, index) => (
//         <li className = "cart-product-name" key = {index}>
//           {item.id}{item.count}
//         </li>
//       ))}
//       {/* <p>Shopping Cart</p> */}
//     </div>
//   )
// }

import React from 'react';
import "./ShoppingCart.css"

export default function ShoppingCart({ isOpen, products, shoppingCart, addToCart, removeToCart }){
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of shoppingCart) {
        subtotal += item.price * item.count;
    }
    return subtotal.toFixed(2);
  };

  const calculateTaxes = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75% tax rate
    const taxes = subtotal * taxRate;
    return taxes.toFixed(2);
  };
    

  const calculateTotalPrice = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxRate = 0.0875; // 8.75% tax rate
    const taxes = subtotal * taxRate;
    const totalPrice = subtotal + taxes;
    return totalPrice.toFixed(2);
  };

  return (
  <div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
      {shoppingCart?.length > 0 ? (
        <div>
          {shoppingCart.map((item) => {
              return (
                <div key={item.id} className="cart-item">
                  {console.log(shoppingCart)}
                  <p className="cart-product-name">{item.name}</p>
                  <p className="cart-product-quantity">{`Quantity: ${item.count}`}</p>
                </div>
              );
          })}
          <p className="subtotal">{`Subtotal: $${calculateSubtotal()}`}</p>
          <p className="taxes">{`Taxes: $${calculateTaxes()}`}</p>
          <p className="total-price">{`Total Price: $${calculateTotalPrice()}`}</p>
        </div>
      ) : (
        <p className="notification">No items added to cart yet. Start shopping now!</p>
      )}
    </div>
  );
};

// export default ShoppingCart;