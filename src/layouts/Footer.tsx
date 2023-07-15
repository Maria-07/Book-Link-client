import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-primary text-secondary p-20">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="my-auto">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p className="my-10 text-gray-400"> &#169; BookLink {year}</p>
        </div>
        <div className="sm:mx-auto my-auto">
          <div className="text-white font-secondary font-medium text-[25px] ">
            Book<span className="text-popover">Link</span>
          </div>
        </div>{' '}
        <div className="flex justify-between gap-10 flex-wrap">
          <div className=" ">
            <div className="flex items-center gap-4 my-5 flex-wrap">
              <Link to={'#'} className="hover:text-popover">
                Upcoming
              </Link>

              <Link to={'#'} className="hover:text-popover">
                Shipping
              </Link>

              <Link to={'#'} className="hover:text-popover">
                How it works
              </Link>
            </div>
            <div className="flex items-center gap-4 my-5 flex-wrap">
              <Link to={'#'} className="hover:text-popover">
                Support
              </Link>
              <Link to={'#'} className="hover:text-popover">
                Careers
              </Link>
            </div>
            <div className="flex items-center gap-4 my-5 flex-wrap">
              {' '}
              <Link to={'#'} className="hover:text-popover">
                List your gear
              </Link>
              <Link to={'#'} className="hover:text-popover">
                Contact team
              </Link>
            </div>

            <div className="flex gap-2 text-2xl">
              <RiFacebookBoxFill />
              <RiInstagramLine />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20 gap-5"></div>
    </div>
  );
}
