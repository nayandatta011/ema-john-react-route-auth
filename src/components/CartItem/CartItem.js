import React from 'react';

const CartItem = (props) => {
    const { key, img, name, price, seller } = props.product;
    return (
        <div className='product-dis-container'>
            <div className='product-img-div'>
                <img src={img} alt="Prouct" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>By: {seller}</p>
                <p>${price}</p>
                <button onClick={() => props.handleRemoveItem(key)}
                    className='btn-cart'>Remove</button>
            </div>

        </div>
    );
};

export default CartItem;