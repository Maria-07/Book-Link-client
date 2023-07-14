import { Card } from 'antd';
import book from '../../assets/images/book.png';

const bookData = [
  {
    _id: {
      $oid: '64b0f948e1a9afed5f376746',
    },
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    publicationDate: '1925',
    reviews: [],
    createdAt: {
      $date: '2023-07-14T07:29:12.929Z',
    },
    updatedAt: {
      $date: '2023-07-14T07:29:12.929Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '64b0fa82d9a1ddf45673a7c6',
    },
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Mystery',
    publicationDate: '2012',
    reviews: [],
    createdAt: {
      $date: '2023-07-14T07:34:26.570Z',
    },
    updatedAt: {
      $date: '2023-07-14T07:34:26.570Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '64b0fa95d9a1ddf45673a7c8',
    },
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    genre: 'Thriller',
    publicationDate: '2003',
    reviews: [
      'An exciting and fast-paced page-turner with a historical twist.',
    ],
    createdAt: {
      $date: '2023-07-14T07:34:45.109Z',
    },
    updatedAt: {
      $date: '2023-07-14T07:34:45.109Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '64b0faa7d9a1ddf45673a7ca',
    },
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    publicationDate: '1813',
    reviews: ['A timeless love story with memorable characters.'],
    createdAt: {
      $date: '2023-07-14T07:35:03.926Z',
    },
    updatedAt: {
      $date: '2023-07-14T07:35:03.926Z',
    },
    __v: 0,
  },
  {
    _id: {
      $oid: '64b0fab3d9a1ddf45673a7cc',
    },
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    publicationDate: '1960',
    reviews: [],
    createdAt: {
      $date: '2023-07-14T07:35:15.378Z',
    },
    updatedAt: {
      $date: '2023-07-14T08:29:02.616Z',
    },
    __v: 0,
  },
];

const Books = () => {
  const { Meta } = Card;
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
          <div className="mx-auto ">
            <div className="border-[1px] rounded-lg">
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    className="p-10 border-b-[1px]"
                    alt="example"
                    src={book}
                  />
                }
              >
                <div className="">
                  <h1 className="text-xl font-medium text-popover">
                    The Great Gatsby
                  </h1>
                  <h2 className="text-base font-medium text-primary">
                    F. Scott Fitzgerald
                  </h2>
                  <h3 className="text-sm font-medium text-gray-500">Fiction</h3>
                  <h4 className="text-base font-regular mt-3">
                    Published in 1925
                  </h4>
                </div>
              </Card>
            </div>
          </div>
          <div className="mx-auto border">
            <div>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img className="p-10" alt="example" src={book} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </div>
          <div className="mx-auto border">
            <div>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img className="p-10" alt="example" src={book} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </div>
          <div className="mx-auto border">
            <div>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img className="p-10" alt="example" src={book} />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
