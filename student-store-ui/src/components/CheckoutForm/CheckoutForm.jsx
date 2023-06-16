import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
    const handleOnSubmit = () => {
        if(POST === None){
            <p className = "error">404 Error</p>
        } else{
            <p className = "success">Success!</p>
            shoppingCart = []
            //reset checkout form to default state (?)
        }
    }
    
    return (
        <div className="checkout-form">
        {/* <p>Checkout Form</p> */}
        <input className = "checkout-form-input"
            type = "email"
            name = "email"
            placeholder = "student@codepath.org"
            value = {checkoutForm.email}
            onChange = {handleOnCheckoutFormChange}
        />
        <input className = "checkout-form-input"
            type = "text"
            name = "name"
            placeholder = "Student Name"
            value = {checkoutForm.name}
            onChange = {handleOnCheckoutFormChange}
        />
        <button className = "checkout-button" onClick = {handleOnSubmit}>Checkout</button>
        </div>
    )
}