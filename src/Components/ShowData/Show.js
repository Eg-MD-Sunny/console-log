import React from 'react';
import './Show.css';

const Show = (props) => {
    const {_id,name,price} = props.sendProductData;
    return (
        <div className="product">
            <p>ID: {_id}</p>
            <h3>Name: {name}</h3>
            <h4>Price: {price}</h4>
        </div>
    );
};

export default Show;