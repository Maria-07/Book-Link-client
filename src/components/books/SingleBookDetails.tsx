/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Avatar, Tabs } from 'antd';
import { FaFacebookF, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import {
  useGetReviewQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} from '../../redux/features/books/booksApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import TextArea from 'antd/es/input/TextArea';

const SingleBookDetails = () => {
  const { id } = useParams();
  console.log(id);

  // const { data, isLoading, error } = useSingleBookQuery(id);

  //! Review Section

  const [inputValue, setInputValue] = useState<string>('');

  const { data, error } = useGetReviewQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  //! Post review
  const [postReview, { isError, isLoading, isSuccess }] =
    usePostReviewMutation();
  console.log(' Data', data);

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

  console.log(isLoading, error);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      {' '}
      <div className="flex items-center justify-center gap-10 sm:flex-nowrap flex-wrap my-16">
        <div>
          <img
            src={
              'https://proudly.in/wp-content/uploads/2022/09/Think-and-Grow-Rich.webp'
            }
            className="p-10 border"
            alt=""
          />
        </div>
        <div className="p-4">
          <div>
            <h1 className="text-2xl mb-3 font-secondary font-semibold text-popover">
              The Da Vinci Code
            </h1>
            <h2 className="text-[16px] font-medium text-primary">
              <span className="font-semibold"> Author :</span> Dan Brown
            </h2>
            <h3 className="text-[16px] font-medium text-primary">
              <span className="font-semibold"> Genre :</span>Thriller
            </h3>
            <h4 className="text-[16px] font-medium text-primary">
              <span className="font-semibold"> Published Date :</span>1998
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

          <div className="my-10 flex items-center  gap-4">
            <button className="px-3 py-1 border rounded-sm leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary">
              Edit Book
            </button>
            <button className="px-3 py-1 border border-gray-400 rounded-sm leading-7 shadow-md text-[15px] hover:bg-red-700 hover:text-secondary">
              Delete
            </button>
          </div>
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
                label: <p className="text-lg text-primary">Review</p>,
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
    </>
  );
};

export default SingleBookDetails;
