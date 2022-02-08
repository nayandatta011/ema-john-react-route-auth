import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;


    let totalQuantity = 0;
    let itemCost = 0;
    let shippingCost = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        itemCost = itemCost + product.price * product.quantity;
        shippingCost += product.shipping * product.quantity;

        // console.log(product, product.quantity)
        totalQuantity = totalQuantity + product.quantity;
    }


    let totalCost = 0;
    totalCost = itemCost + shippingCost;

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Items ordered: {totalQuantity}</p>
            <p>Items Cost: ${itemCost.toFixed(2)} </p>
            <p>Shipping: ${shippingCost.toFixed(2)}</p>
            <h5>Total Cost: ${totalCost.toFixed(2)} </h5>
            {props.children}
        </div>
    );
};

export default Cart;