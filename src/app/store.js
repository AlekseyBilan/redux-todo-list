import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import { applyMiddleware, createStore } from 'redux';

// import logger from 'redux-logger'
// // Logger with default options

// // const store = createStore(
// //   reducer,
// //   applyMiddleware(logger)
// // )

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
