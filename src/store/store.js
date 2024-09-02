import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import pizzaReducer from "../features/pizzaSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    pizza: pizzaReducer,
  },
});

export default store;
