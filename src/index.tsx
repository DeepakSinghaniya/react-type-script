import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './App';
import productReducer from './store/productSlice';
import { BrowserRouter } from 'react-router-dom';


export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter><App /></BrowserRouter>
    </Provider>
   </React.StrictMode>
);


