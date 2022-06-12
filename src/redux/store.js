import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './reducers/authenticateReducer';
import productReducer from './reducers/productReducer';

// let store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer
  }
});

export default store;