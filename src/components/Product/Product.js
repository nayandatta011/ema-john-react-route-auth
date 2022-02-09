import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { img, name, price, seller, stock } = props.product;
    return (
        <div className='product-dis-container'>
            <div className='product-img-div'>
                <img src={img} alt="Product" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>By: {seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>Add to cart</button>
            </div>

        </div>
    );
};

export default Product;