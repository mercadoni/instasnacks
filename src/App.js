import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "./reducers/reducer"
import Products from "./components/Products";
import Header from "./components/Header"
import InputName from "./components/InputName"
import Cart from "./components/Cart";

const store = createStore(
  reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return(
    <Provider store={store}>
      <InputName/>
      <Header/>
      <Cart/>
      <Products/>
    </Provider>
  )
}

export default App;
