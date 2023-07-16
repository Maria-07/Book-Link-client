import { api } from '../../api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //* get all books
    getBooks: builder.query({ query: () => '/books' }),

    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
    }),

    getReview: builder.query({
      query: (id) => `/comment/${id}`,
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetReviewQuery,
  usePostReviewMutation,
} = bookApi;
