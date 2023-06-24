import * as React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./App.css"

export default function App() {
  //state variables
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false) //boolean
  const [error, setError] = useState()
  const [isOpen, setIsOpen] = useState()
  const [shoppingCart, setShoppingCart] = useState([]) //do this later
  const [checkoutForm, setCheckoutForm] = useState()

  const [cart, setCart] = useState([]);


  // const addToCart = (item)=>{
  //   let cartItem = cart?.find(cartElement => cartElement.id == item.id)
  //   let newCartItem = null
  //     if(cartItem){
  //       newCartItem = {...item, count: cartItem.count++};
  //     }else{
  //       newCartItem = {...item, count:1}
  //     }
  //     setCart([...cart, newCartItem])
  // }

  const addToCart = (item)=>{
    if(cart.includes(item)){
        console.log(item.count)
        item.count++
      }else{
        item.count = 1
        cart.push(item)
      }
      setCart(cart)
      console.log("Cart")
      console.log(cart)
  }

  const removeToCart = (item)=>{
    if(cart.includes(item)){
        console.log(item.count)
        item.count--
        if(item.count <= 0){
          const index = cart.indexOf(item)
          var noItem = cart.splice(index, 1)
          setCart(noItem)
          console.log(cart)
        }
      }
    else{
      item.count = 1
      cart.push(item)
    }
    setCart(cart)
    console.log("Cart")
    console.log(cart)
  }

  useEffect(() => {
    const authUser = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get("http://localhost:6001/store");
        if (res?.data?.products) {
          // console.log(res?.data?.products)
         await setProducts(res.data.products);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        // console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    authUser();
  }, []);

  console.log(cart)
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* <Routes>
            <Route>

            </Route>
          </Routes> */}
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} products={products} shoppingCart = {cart} checkoutForm={checkoutForm}/>
          <Home products = {products} addToCart={addToCart} removeToCart={removeToCart}/>
          {/* <ShoppingCart products = {products} shoppingCart={cart} addToCart={addToCart} removeToCart={removeToCart}/> */}
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
