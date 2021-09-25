import React from 'react';

const Product = ({ product, handleAddProduct }) => {
    const { name, img, price, stock } = product
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt=""></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">
                                <small>${price}</small>
                            </p>
                            <p className="card-text"><small className="text-muted">{stock} left</small></p>
                            <button className="btn btn-warning" onClick={() => {
                                handleAddProduct(product)
                            }}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;