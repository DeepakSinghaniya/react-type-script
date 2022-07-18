import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { createProducts } from "../store/productSlice";


const Products = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(createProducts({ name: 'est', description: 'dec', inStock: false }));
    }, []);
    return <div>Products product to create</div>
}

export default Products;