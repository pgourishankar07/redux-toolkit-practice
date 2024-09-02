import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5,
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    buyPizza: (state) => {
      state.value -= 1;
    },
  },
});

export const { buyPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
