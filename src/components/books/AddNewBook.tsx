/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import { IoMdCloseCircleOutline } from 'react-icons/io';

interface props {
  handleClose: any;
  clicked: boolean;
}

const AddNewBook = ({ handleClose, clicked }: props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: object) => {
    console.log(data);
    reset();
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <input
                className="col-span-2 modal-input-field mt-1 w-full"
                {...register('genre')}
              />
            </div>
            <div className="my-3">
              <label className="label">
                <span className="modal-label-name">Published Date</span>
              </label>
              <input
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
        </div>
      </Modal>
    </div>
  );
};

export default AddNewBook;
