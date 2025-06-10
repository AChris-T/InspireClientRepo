import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { AuthApi } from './authApi';
import { DashboardApi } from './DashboardApi';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [DashboardApi.reducerPath]: DashboardApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApi.middleware, DashboardApi.middleware),
});

export default store;
