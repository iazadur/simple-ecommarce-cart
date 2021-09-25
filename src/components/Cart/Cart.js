import React from 'react';

const Cart = (props) => {
    const {cart} = props || []
    console.log(cart.length);
    return (
        <div>
            <h3><i className="fas fa-shopping-cart"></i> md azadur rahman</h3>
            <h4>items orders: {cart.length}</h4>

        </div>
    );
};

export default Cart;