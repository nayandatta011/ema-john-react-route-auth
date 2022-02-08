import { useState, useEffect } from "react"
import { getStoredCart } from "../db";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    // console.log(products)

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
                    addedProduct.quantity = quantity;

                    storedCart.push(addedProduct);
                }
            }
        }

        setCart(storedCart);

    }, [products]);




    return [cart, setCart];
}

export default useCart;