import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Components
import Product from './shared/Product';
import Loader from './Loader';
// Style
import styles from "./Store.module.css";

//Redux
import { fetchProducts } from '../redux/Product/productAction';

const Store = () => {
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    }, [])

    return (
        <div className={styles.container} >
            {
                productsState.loading ?
                    <Loader /> :
                    productsState.error ?
                        <p>ERROR!!!</p> :
                        productsState.products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;