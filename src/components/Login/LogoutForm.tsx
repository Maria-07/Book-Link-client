import { Modal } from 'antd';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface props {
  handleClose: any;
  clicked: boolean;
}

const LogoutForm = ({ handleClose, clicked }: props) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    Cookies.remove('accessToken'); // Clear the access token from the cookie
    navigate('/login'); // Redirect the user to the login page
    handleClose();
  };
  return (
    <div>
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
            <div className="flex items-end justify-end">
              <IoMdCloseCircleOutline
                onClick={handleClose}
                className="text-gray-500 text-2xl hover:text-primary"
              />
            </div>

            <div className="text-lg font-medium mt-5 mb-10 text-center">
              Do you want to Logout ?
            </div>
            <div className="bg-gray-200 py-[1px] mt-3"></div>
            <div className=" flex items-end justify-end mt-2">
              <button
                className="px-3 mr-1 py-1 border rounded-md leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary"
                onClick={handleLogOut}
              >
                Log Out
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
    </div>
  );
};

export default LogoutForm;
