import { useEffect, useState } from 'react';
import { useGetAllWishListQuery } from '../../redux/features/books/booksApi';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const WishedBooks = () => {
  const [bookData, setBookData] = useState([]);
  const { data, isLoading, error } = useGetAllWishListQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 500,
  });

  // console.log(isLoading, error);

  useEffect(() => {
    console.log('wish book data', data?.data);
    setBookData(data?.data);
  }, [data]);
  return (
    <div>
      <div className="w-[60vw] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-8 gap-10">
          {bookData?.map((d: any, index: number) => (
            <>
              <Link className="mx-auto " to={`/book-details/${d?.book?.id}`}>
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
    </div>
  );
};

export default WishedBooks;
