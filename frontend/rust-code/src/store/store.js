// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import {counterReducer} from './reducers/incrementReducer';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
