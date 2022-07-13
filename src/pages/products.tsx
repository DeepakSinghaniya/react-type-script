import { useEffect } from "react";
import { addProduct } from "../store/api";

const Products = () => {
    useEffect(() => {
        addProduct({ name: 'est', description: 'dec', inStock: false });
    }, []);
    return <div>Products</div>
}

export default Products;