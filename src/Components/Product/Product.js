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
        <div>
           <h1>Data Loaded: {products.length}</h1>
           {
                products.map(product=><Show sendProductData={product}></Show>)
           }
        </div>
    );
};

export default Product;