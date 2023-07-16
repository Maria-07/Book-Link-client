import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Book from '../../components/Home/Book';
import {
  useGetBooksQuery,
  useGetSearchedBookQuery,
} from '../../redux/features/books/booksApi';
import { IBook } from '../../types/globalType';
import AddNewBook from '../../components/books/AddNewBook';
import { BiSearchAlt } from 'react-icons/bi';

const AllBooks = () => {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState('');

  const { data } = useGetSearchedBookQuery(search);

  useEffect(() => {
    console.log('all books data', data);
    setBookData(data?.data);
  }, [data]);

  const [addBook, setAddBook] = useState(false);
  const handleAddBook = () => {
    setAddBook(!addBook);
  };

  return (
    <div className="view-part mx-auto my-16">
      <div className="flex gap=2 sm:flex-nowrap flex-wrap">
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
            <select className="input border w-[200px] py-[6px] px-2 text-sm ">
              <option value="volvo"></option>
              <option value="volvo">Volvo dfgsdgsdfh</option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
            </select>
          </div>
          <div className="mb-5">
            <h1 className="text-[15px]  my-2 font-semibold">Published Year</h1>
            <select className="input border w-[200px] py-[6px] px-2 text-sm ">
              <option value="volvo"></option>
              <option value="volvo">Volvo dfgsdgsdfh</option>
              <option value="saab">Saab</option>
              <option value="vw">VW</option>
            </select>
          </div>
          <button className="px-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary">
            Filter
          </button>
        </div>
        {/* //! show all books in a card */}
        <div className="mx-auto">
          <div className="flex items-center justify-between px-4">
            <h1 className="text-[18px] font-medium">All Books</h1>
            <button
              onClick={handleAddBook}
              className="px-3 py-1 border rounded-md leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary"
            >
              Add New Book
            </button>
          </div>
          {/* <AllBook></AllBook> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-5 gap-5">
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
