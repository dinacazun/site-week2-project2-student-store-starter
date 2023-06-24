// import * as React from "react"
// import "./CheckoutForm.css"

// export default function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
//     const handleOnSubmit = () => {
//         if(POST === None){
//             <p className = "error">404 Error</p>
//         } else{
//             <p className = "success">Success!</p>
//             shoppingCart = []
//             //reset checkout form to default state (?)
//         }
//     }
    
//     return (
//         <div className="checkout-form">
//         {/* <p>Checkout Form</p> */}
//         <input className = "checkout-form-input"
//             type = "email"
//             name = "email"
//             placeholder = "student@codepath.org"
//             value = {checkoutForm.email}
//             onChange = {handleOnCheckoutFormChange}
//         />
//         <input className = "checkout-form-input"
//             type = "text"
//             name = "name"
//             placeholder = "Student Name"
//             value = {checkoutForm.name}
//             onChange = {handleOnCheckoutFormChange}
//         />
//         <button className = "checkout-button" onClick = {handleOnSubmit}>Checkout</button>
//         </div>
//     )
// }

import React from 'react';
import "./CheckoutForm.css"

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleOnSubmitCheckoutForm();
      // Clear shopping cart and reset form state on successful submission
      shoppingCart.length = 0;
      handleOnCheckoutFormChange({ email: '', name: '' });
    } catch (error) {
      console.error('Error submitting checkout form:', error);
    }
    };

  return (
    <div className={`checkout-form ${isOpen ? 'open' : 'closed'}`}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="student@codepath.org"
          className="checkout-form-input"
          value={checkoutForm?.email}
          onChange={handleOnCheckoutFormChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          className="checkout-form-input"
          value={checkoutForm?.name}
          onChange={handleOnCheckoutFormChange}
        />
        <button type="submit" className="checkout-button">
          Checkout
        </button>
      </form>
      {checkoutForm?.error && <p className="error">{checkoutForm.error}</p>}
      {checkoutForm?.success && <p className="success">Success!</p>}
    </div>
  );
}