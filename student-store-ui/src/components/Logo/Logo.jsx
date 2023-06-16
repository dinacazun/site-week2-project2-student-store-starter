import * as React from "react"
import "./Logo.css"
import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div className = "logo">
      <div className = "twitterLogo">
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Twitter-Logosu-768x432.png"/>
      </div>

      <div className = "instaLogo">
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-768x432.png"/>
      </div>

      <div className = "facebookLogo">
        <img src = "https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu-768x432.png"/>
      </div>

      <Link className = "link" to = "/">Home</Link>
      <Link className = "link" to = "/AboutUs">About Us</Link>
      <Link className = "link" to = "/ContactUs">Contact Us</Link>
      <Link className = "link" to = "Buy Now">Buy Now</Link>
    </div>
  )
}