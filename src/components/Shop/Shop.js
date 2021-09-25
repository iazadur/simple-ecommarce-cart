import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('ProductData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    useEffect(() => {
       
    }, [products])
    
    const handleAddProduct = id => {
        const newCart = [...cart, id]
        setCart(newCart)
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-9">
                    {/* Load All Product  */}
                    <div className="row">
                        {
                            products.map(product => <Product key={product.key} product={product} handleAddProduct={handleAddProduct} />)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    {/* Cart Calculation in here */}
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;