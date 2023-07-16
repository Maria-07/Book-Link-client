import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../config/config';
import Cookies from 'js-cookie';

export const getAccessToken = () => {
  return Cookies.get('accessToken');
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getAccessToken();
      if (token) {
        headers.set('authorization', token);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['review'],
  endpoints: () => ({}),
});
