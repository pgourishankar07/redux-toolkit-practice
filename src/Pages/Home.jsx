import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";
import { buyPizza } from "../features/pizzaSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const pizzaCount = useSelector((state) => state.pizza.value); // Correctly access pizza state
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>
      <h1>Pizza: {pizzaCount}</h1>
      <button onClick={() => dispatch(buyPizza())}>Buy Pizza</button>
    </div>
  );
};

export default Home;

/**
 * useSelector -- used to retrieve specific parts of the state from the Redux store
 */
