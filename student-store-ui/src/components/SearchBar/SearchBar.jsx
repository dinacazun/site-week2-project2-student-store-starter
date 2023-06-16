//import * as React from "react"
import "./SearchBar.css"
import React, {useState} from "react"
import ProductCard from "../ProductCard/ProductCard";

export default function SearchBar({handleSearch}) {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        const query = e.target.value;
        setSearchInput(query);
        handleSearch(query);
    };

    return (
        <div className = "searchbar">
            <input 
                type = "search"
                placeholder = "Search"
                onChange = {handleChange}
                value = {searchInput}
            />
        </div>
    )
}