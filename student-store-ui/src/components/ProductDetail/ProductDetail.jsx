import * as React from "react"
import axios from "axios";
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail(handleAddItemToCart, handleRemoveItemToCart) {
    const [product, setProduct] = useState()
    const {productId} = useParams()

    useEffect(() => {
        axios.get("/store/:productId").then((data) => {
            console.log(data.product)
            setProduct(data.product)
        });
    }, [])

    return (
        <div className = "product-detail">
        <h1 className = "loading">Loading...</h1>
        </div>
    )
}