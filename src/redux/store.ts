// import cartReducer from './features/cart/cartSlice';
import { configureStore } from '@reduxjs/toolkit';
import { bookReducer } from './features/books/booksSlice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
