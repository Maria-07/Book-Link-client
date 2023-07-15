/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Card } from 'antd';
import { IBook } from '../../types/globalType';

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  const { img, title, author, genre, publicationDate } = book;
  return (
    <>
      <div className="mx-auto ">
        <div className="border-[1px] rounded-lg">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img className="p-10 border-b-[1px]" alt="example" src={img} />
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
      </div>
    </>
  );
};

export default Book;
