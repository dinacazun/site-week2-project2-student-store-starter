//import * as React from "react"
import React, {useState, useEffect} from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import SearchBar from "../SearchBar/SearchBar"

export default function Home({addToCart, removeToCart}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try{
      const response = await fetch("https://codepath-store-api.herokuapp.com/store");
      const data = await response.json();
      const fetchedProducts = data.products;
      setProducts(fetchedProducts)
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (query) => {
    const filtered = products.filter((product) => {
      // console.log(product.name)
      // console.log(query)
      return product.name.toLowerCase().includes(query.toLowerCase());
    })
    setFilteredProducts(filtered);
  }

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className = "home">
      <Hero>Hero</Hero>
      <SearchBar handleSearch={handleSearch}/>
      <ProductGrid products = {filteredProducts} addToCart={addToCart} removeToCart={removeToCart}/>
      <div className = "about">
        <h4>About</h4>
        <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
        <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
      </div>
      <div className = "contact">
        <h4>Contact Us</h4>
        <p>Email: code@path.org</p>
        <p>Phone: 1-800-CODEPATH</p>
        <p>Address: 123 Fake Street, San Francisco, CA</p>
      </div>
    </div>
  )
}
