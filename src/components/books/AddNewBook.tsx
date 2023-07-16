/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useCreateBookMutation } from '../../redux/features/books/booksApi';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

interface props {
  handleClose: any;
  clicked: boolean;
}

export type CreateBookFormValues = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  img?: string;
  _id: string;
};

const AddNewBook = ({ handleClose, clicked }: props) => {
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBookFormValues>();

  const [createBook] = useCreateBookMutation();

  const onSubmit = async (bookData: CreateBookFormValues) => {
    // console.log(bookData);

    try {
      const response = await createBook(bookData).unwrap();
      console.log(response.message);
      handleClose();
    } catch (error) {
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
                  className="col-span-2 modal-input-field mt-1 w-full"
                  {...register('img')}
                />
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="modal-label-name">Title</span>
                </label>
                <input
                  className="col-span-2 modal-input-field mt-1 w-full"
                  {...register('title')}
                />
              </div>
              <div className="my-3">
                <label className="label">
                  <span className="modal-label-name">Author</span>
                </label>
                <input
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
                <select
                  className="col-span-2 modal-input-field mt-1 w-full"
                  {...register('publicationDate')}
                >
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                  <option value="1989">1989</option>
                  <option value="1988">1988</option>
                  <option value="1987">1987</option>
                  <option value="1986">1986</option>
                  <option value="1985">1985</option>
                  <option value="1984">1984</option>
                  <option value="1983">1983</option>
                  <option value="1982">1982</option>
                  <option value="1981">1981</option>
                  <option value="1980">1980</option>
                  <option value="1979">1979</option>
                  <option value="1978">1978</option>
                  <option value="1977">1977</option>
                  <option value="1976">1976</option>
                  <option value="1975">1975</option>
                  <option value="1974">1974</option>
                  <option value="1973">1973</option>
                  <option value="1972">1972</option>
                  <option value="1971">1971</option>
                  <option value="1970">1970</option>
                  <option value="1969">1969</option>
                  <option value="1968">1968</option>
                  <option value="1967">1967</option>
                  <option value="1966">1966</option>
                  <option value="1965">1965</option>
                  <option value="1964">1964</option>
                </select>
              </div>
              <div className="bg-gray-200 py-[1px] mt-3"></div>
              <div className=" flex items-end justify-end mt-2">
                <button
                  className="px-3 mr-1 py-1 border rounded-md leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary"
                  type="submit"
                >
                  Add New Book
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

export default AddNewBook;
