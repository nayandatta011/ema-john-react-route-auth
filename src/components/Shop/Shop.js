import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData, getStoredCart } from '../../db';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    // const [matchedProducts, setMatchedProducts] = useState([]);
    // console.log(products);

    // Listener for Add to cart 
    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let cartNew = [];
        if (exists) {
            const restProducts = cart.filter(pd => pd.key !== product.key);
            exists.quantity += 1;
            cartNew = [...restProducts, product];
        } else {
            product.quantity = 1;
            cartNew = [...cart, product];

        }

        setCart(cartNew);
        getData(product.key);
    };


    const handleSearch = event => {
        // console.log(event.target.value);
        // const searchText = event.target.value;
        // const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        // console.log(matchedProduct);

        // setMatchedProducts(matchedProduct);
    }


    return (
        <div>
            <div className='search-div'>
                <input onChange={handleSearch} className='search-text' type="text" placeholder='Enter product name...' />
            </div>

            <div className='shop-container'>
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product.key}
                            handleAddToCart={handleAddToCart}
                            product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to={'/review'} className='btn-cart'>Review Order</Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;