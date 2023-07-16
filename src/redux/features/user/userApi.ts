import { api } from '../../api/apiSlice';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    logIn: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLogInMutation } = userApi;
