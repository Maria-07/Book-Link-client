import { IBook } from '../../types/globalType';
import { useEffect, useState } from 'react';
import { useGetNewBooksQuery } from '../../redux/features/books/booksApi';
import Book from './Book';
import Loader from '../../shared/Loader';

const Books = () => {
  const [bookData, setBookData] = useState([]);
  const { data, isLoading } = useGetNewBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 500,
  });

  if (isLoading) {
    <Loader></Loader>;
  }

  // console.log(isLoading, error);

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
