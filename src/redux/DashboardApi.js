import API_BASE_URL from '@/constant/Api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const DashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get('access_token');
      console.log(token);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    connectShopify: builder.query({
      query: () => ({
        url: '/shopify/auth?shop=stationeries-stores.myshopify.com',
        method: 'GET',
      }),
    }),
    connectWoo: builder.query({
      query: () => ({
        url: '/shopify/woocommerce/connect',
        method: 'GET',
      }),
    }),
  }),
});
export const { useConnectShopifyQuery, useConnectWooQuery } = DashboardApi;
