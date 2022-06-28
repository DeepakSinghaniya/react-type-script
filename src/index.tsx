import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import App from './App';
import productReducer from './store/productSlice';


const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   </React.StrictMode>
);


