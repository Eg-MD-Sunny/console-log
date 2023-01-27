import React, { useEffect, useState } from 'react';
import Show from '../ShowData/Show';
import './Product.css';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className="container">
           <h1>Data Loaded: {products.length}</h1>
           <div className="countries-container">
            {
                    products.map(product=><Show key={product._id} sendProductData={product}></Show>)
            }
           </div>
           
        </div>
    );
};

export default Product;