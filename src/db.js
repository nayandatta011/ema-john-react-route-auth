function getData(id) {
    const exists = doExists();
    // console.log(exists)
    let shoppingCart = {};
    if (!exists) {
        shoppingCart[id] = 1;
    } else {
        shoppingCart = JSON.parse(exists);
        if (shoppingCart[id]) {
            const newValue = shoppingCart[id] + 1;
            shoppingCart[id] = newValue;
        } else {
            shoppingCart[id] = 1;
        }

    }

    updateData(shoppingCart);
}

function doExists() {
    return localStorage.getItem('shopping_cart');
}
function updateData(shoppingCart) {
    const stringified = JSON.stringify(shoppingCart);
    localStorage.setItem('shopping_cart', stringified);
}

function getStoredCart() {
    const exists = doExists();
    return exists ? JSON.parse(exists) : {};
}

function removeCart() {
    const exists = doExists();
    if (exists) {
        localStorage.removeItem('shopping_cart');
    }
}

function removeFromDB(key) {
    const exists = doExists();
    if (exists) {
        const shoppingCart = JSON.parse(exists);
        delete shoppingCart[key];
        updateData(shoppingCart);
    }
}



export { getData, getStoredCart, removeCart, updateData, removeFromDB }