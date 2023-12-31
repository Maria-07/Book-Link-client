import { CreateBookFormValues } from '../../../components/books/AddNewBook';
import { api } from '../../api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //* get all books
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['newBook'],
    }),
    //* get all books year
    getBooksYear: builder.query({
      query: () => '/books/years?sortBy=publicationDate',
      providesTags: ['newBook'],
    }),

    //* get single book
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ['newBook'],
    }),

    //* top 10 new book
    getNewBooks: builder.query({
      query: () => '/books?page=1&limit=10&Order=desc&sortBy=createdAt',
      providesTags: ['newBook'],
    }),

    //* Add New book
    createBook: builder.mutation<any, CreateBookFormValues>({
      query: (bookData) => ({
        url: '/books',
        method: 'POST',
        body: bookData,
      }),
      invalidatesTags: ['newBook'],
    }),

    //* get searched book
    getSearchedBook: builder.query({
      query: (data) => `/books?searchTerm=${data}`,
      providesTags: ['newBook'],
    }),

    //* Update a book
    updateBook: builder.mutation<
      any,
      { id: string; bookData: CreateBookFormValues }
    >({
      query: ({ id, bookData }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: bookData,
      }),
      invalidatesTags: ['newBook'],
    }),

    //* delete single book
    deleteBook: builder.mutation<any, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['newBook'],
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

    //* Post a wishlist
    addToWishList: builder.mutation<any, { book: string; status: string }>({
      query: ({ book, status }) => ({
        url: '/wishLists',
        method: 'POST',
        body: { book, status },
      }),
      invalidatesTags: ['newBook'],
    }),

    //* Get wishlist
    getAllWishList: builder.query({
      query: () => '/wishLists',
      providesTags: ['newBook'],
    }),

    //* Get filter wishlist
    getFilterWishList: builder.query({
      query: (status) => `/wishLists?status=${status}`,
      providesTags: ['newBook'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useGetReviewQuery,
  usePostReviewMutation,
  useGetNewBooksQuery,
  useGetSearchedBookQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useAddToWishListMutation,
  useGetAllWishListQuery,
  useGetFilterWishListQuery,
  useGetBooksYearQuery,
} = bookApi;
