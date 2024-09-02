import Home from "./Pages/Home";
import store from "./store/store";
import "./styles/App.css";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;

/*
1. create store -- reducer
2. createSlice  -- action
3. use in your components
*/
