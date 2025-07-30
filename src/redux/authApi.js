import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import API_BASE_URL from '../constant/Api';
import baseQuery from './BaseQuery';

export const AuthApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body) => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    verifyEmail: builder.mutation({
      query: (body) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (body) => ({
        url: '/auth/request-password-reset',
        method: 'POST',
        body,
      }),
    }),
    googleAuth: builder.mutation({
      query: (body) => ({
        url: '/auth/google',
        method: 'GET',
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterUserMutation,
  useResetPasswordMutation,
  useVerifyEmailMutation,
  useForgetPasswordMutation,
  useVerifyOtpMutation,
  useGoogleAuthMutation,
} = AuthApi;
