import React from 'react';
import './OrderList.css';

const OrderList = props =>{
    return(
        <div className="orders">
            <p><b>Name: {props.name}</b></p>
            <p><i>Price: {props.price}</i></p>
            <p>Count: {props.count}</p>
            <button className="removeBtn" onClick={props.removeItem}>Remove</button>
        </div>
    )
};

export default OrderList;