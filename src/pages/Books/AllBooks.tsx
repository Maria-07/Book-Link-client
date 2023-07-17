import { useEffect, useState } from 'react';
import Book from '../../components/Home/Book';
import {
  useGetBooksYearQuery,
  useGetSearchedBookQuery,
} from '../../redux/features/books/booksApi';
import { IBook } from '../../types/globalType';
import AddNewBook from '../../components/books/AddNewBook';
import { BiSearchAlt } from 'react-icons/bi';
import { getAccessToken } from '../../redux/api/apiSlice';
import Loader from '../../shared/Loader';

const AllBooks = () => {
  const token = getAccessToken();
  // console.log('token', token);

  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState('');

  const { data, isLoading } = useGetSearchedBookQuery(search, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 3000,
  });

  if (isLoading) {
    <Loader />;
  }

  const { data: year } = useGetBooksYearQuery(undefined);

  useEffect(() => {
    console.log('all books data', data);
    setBookData(data?.data);
  }, [data]);

  const [addBook, setAddBook] = useState(false);
  const handleAddBook = () => {
    setAddBook(!addBook);
  };

  // const publicationDates = data.map((item: any) => {
  //   const year = new Date(item.publicationDate).getFullYear();
  //   return year;
  // });

  const publicationDates = year?.data.map((item: any) =>
    new Date(item.publicationDate).getFullYear()
  );

  console.log('year', year);
  console.log('publicationDates', publicationDates);

  return (
    <div className="view-part mx-auto my-16">
      {/* <button onClick={() => toast(' Let’s toast to this toast today! ')}>
        hi
      </button> */}

      <div className="grid sm:grid-cols-4 grid-cols-1">
        {/* <div className="flex gap=2 sm:flex-nowrap flex-wrap"> */}
        <div className="sm:border-r-[1px] px-4 mx-auto">
          <div className="mb-10 flex">
            <input
              placeholder="search here"
              type="text"
              className="border py-[6px] px-2 text-base "
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <BiSearchAlt className="text-4xl p-1  bg-popover shadow-md hover:bg-[#804769] text-secondary " />
          </div>

          <hr />
          <div className="mb-5">
            <h1 className="text-[15px]  my-2 font-semibold">Genre</h1>
            <select
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="input border w-[200px] py-[6px] px-2 text-sm "
            >
              <option value="">-- Select Genre --</option>
              <option value="Fiction">Fiction</option>
              <option value="Mystery">Mystery</option>
              <option value="Thriller">Thriller</option>
              <option value="Romance">Romance</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Historical Fiction">Historical Fiction</option>
              <option value="Horror">Horror</option>
              <option value="Young Adult">Young Adult</option>
              <option value="Biography">Biography</option>
              <option value="Autobiography">Autobiography</option>
              <option value="Memoir">Memoir</option>
              <option value="Self-help">Self-help</option>
              <option value="Business">Business</option>
              <option value="History">History</option>
              <option value="Travel">Travel</option>
              <option value="Science">Science</option>
              <option value="Philosophy">Philosophy</option>
              <option value="Poetry">Poetry</option>
              <option value="Children's">Children's</option>
            </select>
          </div>
          <div className="mb-5">
            <h1 className="text-[15px]  my-2 font-semibold">Published Year</h1>
            <select
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="input border w-[200px] py-[6px] px-2 text-sm "
            >
              <option value=""></option>
              {publicationDates?.map((y: string) => (
                <option value={y}>{y}</option>
              ))}
            </select>
          </div>
          <button className="px-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary">
            Filter
          </button>
        </div>
        {/* //! show all books in a card */}
        <div className="col-span-3">
          <div className="flex items-center justify-between p-4">
            <h1 className="text-[18px] font-medium">All Books</h1>
            {token && (
              <button
                onClick={handleAddBook}
                className="px-3 py-1 border rounded-md leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary"
              >
                Add New Book
              </button>
            )}
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 my-8  gap-5">
            {bookData?.map((book: IBook) => (
              <Book book={book} key={book?.id} />
            ))}
          </div>
        </div>
      </div>

      {addBook && (
        <AddNewBook handleClose={handleAddBook} clicked={addBook}></AddNewBook>
      )}
    </div>
  );
};

export default AllBooks;
