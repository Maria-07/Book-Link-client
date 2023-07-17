/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar, Dropdown, MenuProps, Tabs, notification } from 'antd';
import {
  FaFacebookF,
  FaInstagram,
  FaRegBookmark,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import {
  useAddToWishListMutation,
  useGetReviewQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} from '../../redux/features/books/booksApi';
import { useParams } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from 'react';
import TextArea from 'antd/es/input/TextArea';
import DeleteBookModal from './DeleteBookModal';
import UpdateBook from './UpdateBook';
import CurrentUserEmail from '../../hook/CurrentUserEmail';
import Loader from '../../shared/Loader';

const SingleBookDetails = () => {
  const { id } = useParams();
  const email = CurrentUserEmail();
  console.log('userEmail', email);
  const [api, contextHolder] = notification.useNotification();

  const [wishButton, setWishButton] = useState(false);

  //! Single book query
  const {
    data: book,
    isLoading,
    isSuccess,
  } = useSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  //! update book----------------------------------------------------------------
  const [updateBook, setUpdateBook] = useState(false);

  const handleUpdateBook = () => {
    setUpdateBook(!updateBook);
  };

  //! Delete book----------------------------------------------------------------
  const [deleteBook, setDeleteBook] = useState(false);

  const handleDeleteBook = () => {
    setDeleteBook(!deleteBook);
  };

  //! Get Review Section  --------------------------------------------------------
  const [inputValue, setInputValue] = useState<string>('');
  const { data } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  //! Post review
  const [postReview] = usePostReviewMutation();

  if (isLoading) {
    <Loader />;
  }

  if (isSuccess) {
    // api.open({
    //   message: `The book is successfully get`,
    //   duration: 2,
    // });
  }

  // console.log(isError, isLoading, isSuccess, error);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    console.log(options);
    postReview(options);
    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  //! Get Review Section  --------------------------------------------------------

  //! wishList

  const [addToWishList] = useAddToWishListMutation();

  const handleAddToWishList = async (status: string) => {
    try {
      await addToWishList({ book: book?.data?.id, status: status });

      api.open({
        message: `This Book is added into wishList as ${status}`,
        duration: 2,
      });
    } catch (error) {
      console.error('', error);
      api.open({
        message: 'Failed to add to Wish List',
        duration: 2,
      });
    }
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <button
          onClick={() => {
            handleAddToWishList('reading');
            setWishButton(true);
          }}
        >
          Reading
        </button>
      ),
      key: '0',
    },
    {
      label: (
        <button
          onClick={() => {
            handleAddToWishList('plan to read');
            setWishButton(true);
          }}
        >
          Plan to read
        </button>
      ),
      key: '1',
    },
    {
      label: (
        <button
          onClick={() => {
            handleAddToWishList('finished');
            setWishButton(true);
          }}
        >
          Completed
        </button>
      ),
      key: '3',
    },
  ];

  return (
    <>
      {' '}
      {contextHolder}
      <div className="flex items-center justify-center gap-10 sm:flex-nowrap flex-wrap my-16">
        <div>
          <img
            src={book?.data?.img}
            className="p-10 border sm:h-[590px] sm:w-[400px]"
            alt=""
          />
        </div>
        <div className="p-4">
          <div>
            <h1 className="text-2xl mb-3 font-secondary font-semibold text-popover">
              {book?.data?.title}
            </h1>
            <h2 className="text-[16px] font-medium text-primary">
              <span className="font-semibold"> Author :</span>{' '}
              {book?.data?.author}
            </h2>
            <h3 className="text-[16px] font-medium text-primary">
              <span className="font-semibold"> Genre :</span>{' '}
              {book?.data?.genre}
            </h3>
            <h4 className="text-[16px] font-medium text-primary">
              <span className="font-semibold"> Published Date :</span>{' '}
              {book?.data?.publicationDate}
            </h4>
          </div>
          <div>
            <p className="sm:w-[500px] my-10">
              <span className="font-semibold">Description : </span>
              Each inspirational book is jam-packed with rich content and
              positive information that will be a positive guiding light to your
              life, health, business, career, and relationships. It shows you
              how to get to the cause of all your stumbling blocks so that you
              are empowered to find solutions.
            </p>
          </div>

          <div className="my-10 flex items-center  gap-1">
            <button className="px-3 py-1 border border-gray-400 rounded-sm leading-7 shadow-md text-[15px] hover:bg-[#804769] hover:text-secondary">
              Read Now
            </button>
            <Dropdown menu={{ items }}>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setWishButton(!wishButton);
                }}
              >
                <button title="Add To WishList">
                  {!wishButton ? (
                    <FaRegBookmark className="mt-[6px] text-[38px] text-[#804769] p-2 border border-[#804769] rounded-sm shadow-sm hover:bg-[#804769] hover:text-secondary" />
                  ) : (
                    <FaRegBookmark className="mt-[6px] text-[38px] text-[#fff] p-2 border border-[#804769] rounded-sm shadow-sm bg-[#804769] " />
                  )}
                </button>
              </a>
            </Dropdown>
          </div>

          <div>
            <h1 className="text-[16px] font-semibold  text-primary">
              Share This Book
            </h1>
            <div className="flex items-center gap-5 my-4">
              <FaFacebookF className="text-4xl p-2 border hover:bg-blue-700 hover:text-white" />
              <FaInstagram className="text-4xl p-2 border hover:bg-rose-700 hover:text-white" />
              <FaTwitch className="text-4xl p-2 border hover:bg-purple-700 hover:text-white" />
              <FaTwitter className="text-4xl p-2 border hover:bg-sky-700 hover:text-white" />
            </div>
          </div>

          {book?.data?.userEmail === email && (
            <div className="my-10 flex items-center  gap-4">
              <button
                onClick={handleUpdateBook}
                className="px-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary"
              >
                Edit Book
              </button>
              <button
                onClick={handleDeleteBook}
                className="px-3 py-1 border border-gray-400 rounded-sm leading-7 shadow-md text-[15px] hover:bg-red-700 hover:text-secondary"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      {/* review part  */}
      <div className="view-part mx-auto">
        <div className="my-10 p-4">
          <Tabs
            type="card"
            items={new Array(1).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: (
                  <p key={i} className="text-lg text-primary">
                    Review
                  </p>
                ),
                key: id,
                children: (
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="my-16 ">
                        <TextArea
                          className="min-h-[30px] w-1/2"
                          rows={4}
                          placeholder="maxLength is 6"
                          onChange={handleChange}
                          value={inputValue}
                        />
                        <br />
                        <button className="px-3 my-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary">
                          Submit
                        </button>
                      </div>
                    </form>

                    {data?.data?.reviews.map(
                      (review: string, index: number) => (
                        <>
                          {' '}
                          <div
                            key={index}
                            className=" flex items-center flex-wrap gap-5"
                          >
                            <Avatar
                              icon={<BsPersonCircle className="text-3xl" />}
                            />
                            <div className="text-base">
                              <p>{review}</p>
                            </div>
                          </div>
                          <hr className="my-3" />
                        </>
                      )
                    )}
                  </div>
                ),
              };
            })}
          />
        </div>
      </div>
      {deleteBook && (
        <DeleteBookModal
          id={id}
          handleClose={handleDeleteBook}
          clicked={deleteBook}
        ></DeleteBookModal>
      )}
      {updateBook && (
        <UpdateBook
          id={id}
          book={book}
          handleClose={handleUpdateBook}
          clicked={updateBook}
        ></UpdateBook>
      )}
    </>
  );
};

export default SingleBookDetails;
