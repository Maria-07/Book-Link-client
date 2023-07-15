import '../styles/navbar.css';
import { LuLanguages } from 'react-icons/lu';
import { BiShoppingBag } from 'react-icons/bi';
import CustomLink from '../shared/CustomLink';

const Navbar = () => {
  return (
    <>
      <div className="bg-secondary py-5 px-4">
        <div className="flex items-center justify-between gap-5 view-part mx-auto">
          <div>
            <LuLanguages className="text-2xl" />
          </div>
          <div className="text-primary font-secondary font-medium text-[25px]">
            Book<span className="text-popover">Link</span>
          </div>
          <BiShoppingBag className="text-2xl" />
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
          <CustomLink className="hover:text-popover" to="/signup">
            SignUp
          </CustomLink>
          <CustomLink className="hover:text-popover" to="/login">
            Login
          </CustomLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
