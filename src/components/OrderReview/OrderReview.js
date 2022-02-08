import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';
import Product from '../Product/Product';
import { useNavigate } from 'react-router-dom';
import { getStoredCart, removeCart, removeFromDB, updateData } from '../../db';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    // console.log(cart)
    // console.log(navigate)

    const handlePlacedOrder = () => {
        navigate('/placed-order');
        removeCart();
        setCart([]);
    }

    const handleRemoveItem = (key) => {
        // console.log(key)
        if (cart.length) {
            const newCart = cart.filter(product => product.key !== key);
            setCart(newCart);
            removeFromDB(key);
        }
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        cart.map(product => <CartItem
                            key={product.key}
                            product={product}
                            handleRemoveItem={handleRemoveItem} />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} >
                        <button onClick={handlePlacedOrder} className='btn-cart'>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;