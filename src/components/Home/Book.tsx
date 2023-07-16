/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Card } from 'antd';
import { IBook } from '../../types/globalType';
import { Link } from 'react-router-dom';

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  const { id, img, title, author, genre, publicationDate } = book;

  return (
    <Link className="mx-auto " to={`/book-details/${book?.id}`}>
      <div className="border-[1px] rounded-lg">
        <Card
          hoverable
          style={{ width: 240, height: 475 }}
          cover={
            <img
              className="p-10 border-b-[1px] h-[300px]"
              alt="example"
              src={img}
            />
          }
        >
          <div className="">
            <h1 className="text-xl font-medium text-popover">{title}</h1>
            <h2 className="text-base font-medium text-primary">{author}</h2>
            <h3 className="text-sm font-medium text-gray-500">{genre}</h3>
            <h4 className="text-base font-regular mt-3">{publicationDate}</h4>
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default Book;
