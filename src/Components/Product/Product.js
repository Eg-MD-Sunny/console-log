import React, { useEffect, useState } from 'react';
import Show from '../ShowData/Show';

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
                products.map(product=><Show></Show>)
           }
        </div>
    );
};

export default Product;