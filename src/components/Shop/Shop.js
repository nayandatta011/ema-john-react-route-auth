import React, { useEffect, useState } from 'react';
import { getData, getStoredCart } from '../../db';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [matchedProducts, setMatchedProducts] = useState([]);
    // console.log(products);

    useEffect(() => {
        // console.log('getting products')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(products => {
                setProducts(products);
                setMatchedProducts(products);
                // console.log('data loaded');
            });
    }, []);

    useEffect(() => {
        // console.log('getting data from local storage')
        const savedCart = getStoredCart();
        let storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                // console.log(key, addedProduct);
                if (addedProduct) {
                    // console.log(savedCart[key]);
                    const quantity = savedCart[key];
                    addedProduct['quantity'] = quantity;

                    storedCart.push(addedProduct);
                }
            }
        }

        setCart(storedCart);

    }, [products]);

    // Listener for Add to cart 
    const handleAddToCart = (product) => {
        const cartNew = [...cart, product];
        setCart(cartNew);
        getData(product.key);
    };


    const handleSearch = event => {
        console.log(event.target.value);
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchedProduct);

        setMatchedProducts(matchedProduct);
    }


    return (
        <div>
            <div className='search-div'>
                <input onChange={handleSearch} className='search-text' type="text" placeholder='Enter product name...' />
            </div>

            <div className='shop-container'>
                <div className="product-container">
                    {
                        matchedProducts.map(product => <Product
                            key={product.key}
                            handleAddToCart={handleAddToCart}
                            product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;