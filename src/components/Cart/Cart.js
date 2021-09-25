import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    // using reduce 
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.price;
    const total = cart.reduce(totalReducer, 0)
    return (
        <div>
            <h3><i className="fas fa-shopping-cart"></i> Shopping Cart</h3>
            <h4>items orders: {cart.length}</h4>
            <h4>items orders: {total}</h4>

            <ul>
                {
                    cart.map(product => <li>{product.name}</li>)
                }
            </ul>

        </div>
    );
};

export default Cart;