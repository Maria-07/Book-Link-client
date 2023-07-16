import '../styles/navbar.css';
import { LuLanguages } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import CustomLink from '../shared/CustomLink';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { getAccessToken } from '../redux/api/apiSlice';

const Navbar = () => {
  const token = getAccessToken();
  console.log('token', token);

  const navigate = useNavigate();

  const handleLogOut = () => {
    Cookies.remove('accessToken'); // Clear the access token from the cookie
    navigate('/login'); // Redirect the user to the login page
  };

  return (
    <>
      <div className="bg-secondary py-5 px-4">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-5 view-part mx-auto">
          <div className="">
            <LuLanguages className="text-2xl" />
          </div>
          <div className="text-primary font-secondary font-medium mx-auto text-[25px]">
            Book<span className="text-popover">Link</span>
          </div>
          <div className="flex items-center justify-end gap-3">
            {!token && (
              <Link to="/signup">
                {' '}
                <button className="hover:text-popover">SignUp</button>
              </Link>
            )}
            {!token && <div className="mx-1">|</div>}
            {!token && (
              <Link to="/login">
                {' '}
                <button className="hover:text-popover">Login</button>
              </Link>
            )}

            {token && (
              <button className="hover:text-popover" onClick={handleLogOut}>
                Log Out
              </button>
            )}
            <div className="mx-1">|</div>
            <BiShoppingBag className="text-2xl" />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-5">
        <div className=" flex items-center gap-5 sm:gap-16 text-lg font-medium font-primary">
          <CustomLink className="hover:text-popover" to="/">
            Home
          </CustomLink>
          <CustomLink className="hover:text-popover" to="/books">
            Books
          </CustomLink>
          <CustomLink className="hover:text-popover" to="/wish-list">
            WishList
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
