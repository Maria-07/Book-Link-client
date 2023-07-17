import WishedBooks from '../../components/wishList/WishedBooks';
import { useState, useEffect } from 'react';
import { useGetFilterWishListQuery } from '../../redux/features/books/booksApi';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import CurrentUserEmail from '../../hook/CurrentUserEmail';
import Loader from '../../shared/Loader';
const WishList = () => {
  const email = CurrentUserEmail();

  const [status, setStatus] = useState('');
  const [filterBook, setFilterBook] = useState([]);
  const { data, isLoading } = useGetFilterWishListQuery(status);

  console.log(data);

  if (isLoading) {
    <Loader></Loader>;
  }

  useEffect(() => {
    console.log('wish book data', data?.data);
    setFilterBook(data?.data);
  }, [data]);

  // Filter wishList data based on matching userEmail
  const filteredWishList = filterBook?.filter(
    (item: any) => item.userEmail === email
  );

  return (
    <div>
      {' '}
      <div className="view-part mx-auto my-16">
        <div className="flex gap=2 sm:flex-nowrap flex-wrap">
          <div className="sm:border-r-[1px] px-4 mx-auto">
            <div className="mb-5">
              <h1 className="text-[15px]  my-2 font-semibold">Status</h1>
              <select
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                className="input border w-[200px] py-[6px] px-2 text-sm "
              >
                <option value="">All</option>
                <option value="reading">Reading</option>
                <option value="plan to read">Plan to read</option>
                <option value="finished">Finished</option>
              </select>
            </div>
          </div>

          {status ? (
            <div className="w-[60vw] mx-auto ">
              <div className="grid grid-cols-1 md:grid-cols-3  my-8 gap-5">
                {filteredWishList?.map((d: any, index: number) => (
                  <>
                    <Link
                      className="mx-auto ml-10"
                      to={`/book-details/${d?.book?.id}`}
                    >
                      <div key={index} className="border-[1px] rounded-lg">
                        <Card
                          hoverable
                          style={{ width: 240, height: 475 }}
                          cover={
                            <img
                              className="p-10 border-b-[1px] h-[300px]"
                              alt="example"
                              src={d?.book?.img}
                            />
                          }
                        >
                          <div className="">
                            <h1 className="text-xl font-medium text-popover">
                              {d?.book?.title}
                            </h1>
                            <h2 className="text-base font-medium text-primary">
                              {d?.book?.author}
                            </h2>
                            <h3 className="text-sm font-medium text-gray-500">
                              {d?.book?.genre}
                            </h3>
                            <h4 className="text-base font-regular mt-3">
                              {d?.book?.publicationDate}
                            </h4>
                          </div>
                        </Card>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          ) : (
            <div className="mx-auto">
              <WishedBooks></WishedBooks>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
