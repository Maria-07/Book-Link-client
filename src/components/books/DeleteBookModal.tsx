import { Modal } from 'antd';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { useDeleteBookMutation } from '../../redux/features/books/booksApi';
import { useNavigate } from 'react-router-dom';

interface props {
  id: string;
  handleClose: any;
  clicked: boolean;
}

const DeleteBookModal = ({ id, handleClose, clicked }: props) => {
  const navigate = useNavigate();
  console.log(id);

  //! Delete book Api
  const [deleteBook, { isError, isLoading, isSuccess }] =
    useDeleteBookMutation();

  console.log(isError, isLoading, isSuccess);

  const handleDelete = async () => {
    try {
      console.log('id', id);
      await deleteBook(id).unwrap();
      //   toast.success('Deleted!', 'Your book has been deleted.', 'success');
      navigate('/books');
    } catch (error) {
      //   toast.error('Error!', 'Failed to delete book.', 'error');
      console.error('Failed to delete book:', error);
    }
  };

  return (
    <div>
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
              Delete Book
            </h1>

            <IoMdCloseCircleOutline
              onClick={handleClose}
              className="text-gray-500 text-2xl hover:text-primary"
            />
          </div>
          <div className="bg-gray-200 py-[1px] mt-3"></div>
          <div className="text-center  text-base font-semibold my-16">
            Want to delete this book ?
          </div>
          {/* {!error && <div></div>}
          {error && (
            <p className="p-4 text-base font-medium text-rose-600">{error}</p>
          )} */}
          {/* <div className="bg-gray-200 py-[1px] mt-3"></div> */}
          <div className=" flex items-end justify-end mt-2">
            <button
              className="px-3 mr-1 py-1 border rounded-md leading-7 text-[15px] bg-red-700 shadow-md hover:bg-rose-800 text-secondary"
              onClick={handleDelete}
            >
              DELETE
            </button>

            <button
              onClick={handleClose}
              className="px-3 py-1 border border-gray-400 rounded-md leading-7 shadow-md text-[15px] hover:bg-red-700 hover:text-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteBookModal;
