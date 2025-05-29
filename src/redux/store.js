import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { AuthApi } from './authApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});

export default store;
