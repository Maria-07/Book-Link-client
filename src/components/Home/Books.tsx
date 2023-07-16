import { IBook } from '../../types/globalType';
import { useEffect, useState } from 'react';
import { useGetNewBooksQuery } from '../../redux/features/books/booksApi';
import Book from './Book';

const bookData = [
  {
    _id: '64b0fab3d9a1ddf45673a7cc',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    publicationDate: '1960',
    img: 'https://c8.alamy.com/comp/KJAB7G/book-cover-creative-concept-drama-or-horror-theme-mid-century-style-KJAB7G.jpg',
    reviews: [],
    createdAt: '2023-07-14T07:35:15.378Z',
    updatedAt: '2023-07-14T08:29:02.616Z',
    __v: 0,
    id: '64b0fab3d9a1ddf45673a7cc',
  },
  {
    _id: '64b0faa7d9a1ddf45673a7ca',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    publicationDate: '1813',
    img: 'https://c8.alamy.com/comp/KJAB7G/book-cover-creative-concept-drama-or-horror-theme-mid-century-style-KJAB7G.jpg',
    reviews: ['A timeless love story with memorable characters.'],
    createdAt: '2023-07-14T07:35:03.926Z',
    updatedAt: '2023-07-14T07:35:03.926Z',
    __v: 0,
    id: '64b0faa7d9a1ddf45673a7ca',
  },
  {
    _id: '64b0fa95d9a1ddf45673a7c8',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Thriller',
    publicationDate: '2003',
    img: 'https://c8.alamy.com/comp/KJAB7G/book-cover-creative-concept-drama-or-horror-theme-mid-century-style-KJAB7G.jpg',
    reviews: [
      'An exciting and fast-paced page-turner with a historical twist.',
    ],
    createdAt: '2023-07-14T07:34:45.109Z',
    updatedAt: '2023-07-14T07:34:45.109Z',
    __v: 0,
    id: '64b0fa95d9a1ddf45673a7c8',
  },
  {
    _id: '64b0fa82d9a1ddf45673a7c6',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Mystery',
    publicationDate: '2012',
    img: 'https://c8.alamy.com/comp/KJAB7G/book-cover-creative-concept-drama-or-horror-theme-mid-century-style-KJAB7G.jpg',
    reviews: [],
    createdAt: '2023-07-14T07:34:26.570Z',
    updatedAt: '2023-07-14T07:34:26.570Z',
    __v: 0,
    id: '64b0fa82d9a1ddf45673a7c6',
  },
  {
    _id: '64b0f948e1a9afed5f376746',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    publicationDate: '1925',
    img: 'https://c8.alamy.com/comp/KJAB7G/book-cover-creative-concept-drama-or-horror-theme-mid-century-style-KJAB7G.jpg',
    reviews: [],
    createdAt: '2023-07-14T07:29:12.929Z',
    updatedAt: '2023-07-14T07:29:12.929Z',
    __v: 0,
    id: '64b0f948e1a9afed5f376746',
  },
];

const Books = () => {
  const [bookData, setBookData] = useState([]);
  const { data, isLoading, error } = useGetNewBooksQuery(undefined);

  useEffect(() => {
    console.log('all books data', data);
    setBookData(data?.data);
  }, [data]);

  return (
    <>
      <div className="flex items-center justify-center mt-24">
        <div>
          <h1 className="text-center text-[30px] font-medium">Our Books</h1>
          <div className="text-gray-500 my-3 text-center">
            Books have been a fundamental part of human civilization, serving as
            sources of information, entertainment, and inspiration.
          </div>
        </div>
      </div>
      <div className="w-[60vw] mx-auto my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-8 gap-10">
          {bookData?.map((book: IBook) => <Book book={book} key={book?.id} />)}
        </div>
      </div>
    </>
  );
};

export default Books;
