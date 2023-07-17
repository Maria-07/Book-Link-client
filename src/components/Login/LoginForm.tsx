import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { useLogInMutation } from '../../redux/features/user/userApi';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [loginMutation] = useLogInMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data, emailError, passError);
    try {
      setEmailError(''); // Clear the error message before making the login API call
      setPassError(''); // Clear the error message before making the login API call
      const response: any = await loginMutation(data);
      console.log('response', response);

      const accessToken = response?.data?.data?.accessToken;

      console.log('accessToken ', accessToken);

      if (accessToken) {
        Cookies.set('accessToken', accessToken); // Store the access token in a cookie
      }

      navigate('/');
    } catch (error: any) {
      if (error?.data?.message === 'Password is incorrect') {
        setPassError('Password is incorrect');
      } else if (error?.data?.message === 'User does not exist') {
        setPassError('User does not exist');
      }
    }
  };

  return (
    <div className="p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <h1 className="text-sm text-primary font-medium mt-3">Email</h1>
            <input
              placeholder="name@example.com"
              type="email"
              className="border-b-2 text-sm p-1"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="font-normal text-sm text-rose-600">
                {errors.email.message}
              </p>
            )}
            <h1 className="text-sm text-primary mt-3">Password</h1>
            <input
              placeholder="your password"
              type="password"
              className="border-b-2 text-sm p-1"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="font-normal text-sm text-rose-600">
                {errors.password.message}
              </p>
            )}
          </div>
          {}
          <button className="px-3 py-1 border my-5 leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary rounded-md">
            Log In
          </button>
          <div className="mx-auto">
            Don't have any account ?{' '}
            <Link className="text-popover font-semibold" to={'/signUp'}>
              Sign Up
            </Link>{' '}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
