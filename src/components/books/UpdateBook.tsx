/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useUpdateBookMutation } from '../../redux/features/books/booksApi';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

interface props {
  id: any;
  book: CreateBookFormValues;
  handleClose: any;
  clicked: boolean;
}

export type CreateBookFormValues = {
  [x: string]: any;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  img?: string;
  _id: string;
};

const UpdateBook = ({ id, book, handleClose, clicked }: props) => {
  const [error, setError] = useState('');

  console.log('bookData', id);

  const { register, handleSubmit } = useForm<CreateBookFormValues>();

  const [updateBook] = useUpdateBookMutation();

  const onSubmit = async (bookData: CreateBookFormValues) => {
    console.log(bookData);
    try {
      const response = await updateBook({ id, bookData }).unwrap();
      console.log(response.message);
      handleClose();
    } catch (error: any) {
      // console.error(error?.data?.message);
      setError(error?.data?.message);
    }
  };

  return (
    <div>
      {' '}
      <Modal
        open={clicked}
        centered
        footer={null}
        bodyStyle={{ padding: '0' }}
        width={500}
        closable={false}
        className="box"
      >
        <ToastContainer />
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight">
              Add New Books
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          {!error && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="my-3">
                <label className="label">
                  <span className="modal-label-name">Book Photo</span>
                </label>
                <input
                  defaultValue={book?.data?.img}
                  className="col-span-2 modal-input-field mt-1 w-full"
                  {...register('img')}
                />
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="modal-label-name">Title</span>
                </label>
                <input
                  defaultValue={book?.data?.title}
                  className="col-span-2 modal-input-field mt-1 w-full"
                  {...register('title')}
                />
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="modal-label-name">Author</span>
                </label>
                <input
                  defaultValue={book?.data?.author}
                  className="col-span-2 modal-input-field mt-1 w-full"
                  {...register('author')}
                />
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="modal-label-name">Genre</span>
                </label>

                <select
                  className="col-span-2 modal-input-field mt-1 w-full"
                  defaultValue={book?.data?.genre}
                  {...register('genre')}
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
              <div className="my-3">
                <label className="label">
                  <span className="modal-label-name">Published Date</span>
                </label>
                <input
                  defaultValue={book?.data?.publicationDate}
                  type="date"
                  className="col-span-2 modal-input-field mt-1 w-full"
                  {...register('publicationDate')}
                />
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button
                  className="px-3 mr-1 py-1 border rounded-md leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary"
                  type="submit"
                >
                  Update Book
                </button>

                <button
                  onClick={handleClose}
                  className="px-3 py-1 border border-gray-400 rounded-md leading-7 shadow-md text-[15px] hover:bg-red-700 hover:text-secondary"
                >
                  Close
                </button>
              </div>
            </form>
          )}
          {error && (
            <p className="p-4 text-base font-medium text-rose-600">{error}</p>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default UpdateBook;
