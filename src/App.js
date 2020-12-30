import React,{useState} from 'react';
import { nanoid } from 'nanoid';
import './App.css'
import FoodList from './components/FoodList/FoodList';
import OrderList from './components/OrdersList/OrderList';

const App = () => {
  const [foods, setFoods]=useState([
    {name:'Hamburger', price:80, id:nanoid(), count:0},
    {name:'Cheeseburger', price:90, id:nanoid(), count:0},
    {name:'Fries', price:45, id:nanoid(), count:0},
    {name:'Cofee', price:70, id:nanoid(), count:0},
    {name:'Tea', price:50, id:nanoid(), count:0},
    {name:'Cola', price:40, id:nanoid(), count:0}
  ]);

  const [orders, setOrders]=useState([]);

  const countPrice = orders.reduce((acc, order)=>{
    return acc+(order.count*order.price);
  },0)

  const addItem = id =>{
    const index = foods.findIndex(p=>p.id===id);
    const foodsCopy = [...foods];
    const food = {...foods[index]};
    food.count++;
    const order = {};
    order.name = food.name;
    order.price = food.price;
    order.count = food.count;
    order.id = food.id;
    orders.push(order);
    foodsCopy[index] = food;
   setFoods(foodsCopy);   
  }

  const removeItem = id =>{
    const index = orders.findIndex(p=>p.id===id);
    const ordersCopy = [...orders];
    const order = {...orders[index]};
    order.count = 0;
    ordersCopy.splice(index,1);
    ordersCopy[index] = order;
    setOrders(ordersCopy);
    console.log(orders)
  }

  const foodList = (  
    foods.map(food=>(
      <FoodList
      key={food.id}
      name={food.name}
      price={food.price}
      addItem={(e)=>addItem(food.id)}>
      </FoodList>
    ))
  );

  const orderList = (
    orders.map(order=>(
      <OrderList
      key={order.id}
      name={order.name}
      count={order.count}
      price={order.price}
      removeItem={(e)=>removeItem(order.id)}
      >
      </OrderList>
    ))
  )



  return (
    <div className="App">
      <div className="main">
        <div className="Order">
          {orderList}
          <p>Total:{countPrice}Kgs</p>
        </div>
        <div className="ButtonList">
          {foodList}
        </div>
      </div>
    </div>
  );
}

export default App;
