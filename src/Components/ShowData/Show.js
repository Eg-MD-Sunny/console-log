import React from 'react';

const Show = (props) => {
    const {_id,name} = props.productData;
    return (
        <div>
            <p>ID: {_id}</p>
            <h3>Product Name: {name}</h3>
        </div>
    );
};

export default Show;