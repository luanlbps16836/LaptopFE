import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import mySaga from './redux/sagas';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import ProductsSlice from './redux/Products/ProductsSlice';
import CategoriesSlice from './redux/Categories/CategoriesSlice';
import AuthSlice from './redux/Auth/AuthSlice';
import CartsSlice from './redux/Carts/CartsSlice';
import FavoritesSlice from './redux/Favorites/FavoritesSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({reducer: {products: ProductsSlice, categories: CategoriesSlice, auth: AuthSlice, carts: CartsSlice, favorites: FavoritesSlice}, middleware: [sagaMiddleware]});

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>, document.getElementById('root')
);