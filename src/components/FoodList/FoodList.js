import React from 'react';
import './FoodList.css';

const FoodList = props =>{
    return(
       <div> 
           <button className="foodBtn" onClick={props.addItem}> 
           {props.name}: 
           {props.price}kgs
            </button>
        </div>
    )
};

export default FoodList;