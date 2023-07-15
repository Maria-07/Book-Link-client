import { Link } from 'react-router-dom';
import LoginForm from '../../components/Login/LoginForm';

const Login = () => {
  return (
    <div>
      {' '}
      <div className="my-24">
        {/* <div className="text-primary font-secondary text-center font-medium text-[25px]">
          Book<span className="text-popover">Link</span>
        </div> */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-xl font-semibold tracking-tight">
                Login to your account
              </h1>
            </div>
            <hr />
            <LoginForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
