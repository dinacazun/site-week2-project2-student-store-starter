import * as React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
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

  useEffect(() => {
    const authUser = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get("https://codepath-store-api.herokuapp.com/store");
        if (res?.data?.products) {
          console.log(res?.data?.products)
         await setProducts(res.data.products);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    authUser();
  }, []);

  // const handleOnToggle = () => {
  //   //handles toggle open and closed state of side bar
  // }

  // const handleAddItemToCart = (productId) => {
  //   var addedItem = [...shoppingCart]
  //   let arr = {name: userProfile.name, handle: userProfile.handle, 
  //   text: tweetText, id: tweets.length}
  //   addedItem.push(arr)
  //   //console.log(newTweet)
  //   setTweets(newTweet)
  //   tweetText = " "
  // }

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
          {/* <Sidebar /> */}
          <Home products = {products}/>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
