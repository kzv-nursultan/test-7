import React,{useState} from 'react';
import { nanoid } from 'nanoid';
import './App.css'

const App = () => {
  const [foods, setFoods]=useState([
    {name:'Hamburger', price:80, id:nanoid()},
    {name:'Cheeseburger', price:90, id:nanoid()},
    {name:'Fries', price:45, id:nanoid()},
    {name:'Cofee', price:70, id:nanoid()},
    {name:'Tea', price:50, id:nanoid()},
    {name:'Cola', price:40, id:nanoid()}
  ]);

  const [orders, setOrders]=useState([]);

  

  return (
    <div className="App">

    </div>
  );
}

export default App;
