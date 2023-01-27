import React from 'react';
import { addToDb } from '../utilities/fakedb';
import './Show.css';

const Show = (props) => {
    const {_id,name,price} = props.sendProductData;
    const addToCart = (_id,price) =>{
        // console.log('Product Name is:',_id)
        // localStorage.setItem(_id,1)
        addToDb(_id,price);
    }
    const addToCartWithParam = ()=> addToCart(_id,price)
    return (
        <div className="product">
            <p>ID: {_id}</p>
            <h3>Name: {name}</h3>
            <h4>Price: ${price} USD</h4>
            <button onClick={addToCartWithParam}>Add To Cart</button>
        </div>
    );
};

export default Show;