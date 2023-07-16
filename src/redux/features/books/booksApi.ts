import { api } from '../../api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //* get all books
    getBooks: builder.query({ query: () => '/books' }),

    //* get single book
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),

    //* top 10 new book
    getNewBooks: builder.query({
      query: () => '/books?page=1&limit=10&Order=desc&sortBy=createdAt',
    }),

    //* Post a review
    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/review/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['review'],
    }),

    //* get all review
    getReview: builder.query({
      query: (id) => `/books/review/${id}`,
      providesTags: ['review'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetReviewQuery,
  usePostReviewMutation,
  useGetNewBooksQuery,
} = bookApi;
