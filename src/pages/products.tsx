import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createProducts, getProducts } from "../store/productSlice";
import { Product } from '../allTypes';


const Products = () => {
    const dispatch = useAppDispatch();
    const products: Product[] = useAppSelector(state => state?.products?.products?.list);
    useEffect(() => {
        dispatch(getProducts());
        // dispatch(createProducts({ name: 'est', description: 'dec', inStock: false }));
    });

    const addProduct = (e: any) => {
        e.preventDefault();
        dispatch(createProducts({
            name: e.target.elements.name.value,
            description: e.target.elements.description.value,
            inStock: true
        }))
    }

    return <div>
        <form onSubmit={addProduct}>
            <input type="text" name="name" />
            <input type="text" name="description" />
            <button>Submit</button>
        </form>
        {products.length ? <ol>{
            products.map(product => {
                return <li key={product.id}>
                    <p>Name: {product?.name}</p>
                    <p>Discr: {product?.description}</p>
                    <p>In Stock: {product?.inStock}</p>
                </li>
            })
        }</ol> : null}
    </div>
}

export default Products;