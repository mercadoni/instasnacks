import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from "./reducers/reducer"
import Products from "./components/Products";
import Body from "./components/Body"
import InputName from "./components/InputName"

const store = createStore(
  reducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return(
    <Provider store={store}>
      <InputName/>
      <Body/>
      <Products/>
    </Provider>
  )
}

export default App;
