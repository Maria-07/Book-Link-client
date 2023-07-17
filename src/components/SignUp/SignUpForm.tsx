/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../../redux/features/user/userApi';
import { notification } from 'antd';

interface SignUpFormInputs {
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [api, contextHolder] = notification.useNotification();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const [signUp] = useSignUpMutation();

  const navigate = useNavigate();

  console.log(error);

  //! api
  const onSubmit = async (data: SignUpFormInputs) => {
    try {
      setError('');
      await signUp({ email: data.email, password: data.password }).unwrap();
      navigate('/login');
    } catch (error: any) {
      console.log(error?.data?.message);

      api.open({
        message: (
          <div className="text-base font-semibold">
            <span className="text-rose-500 font-bold"> Error : </span>$
            {error?.data?.message}
          </div>
        ),
        duration: 3,
      });

      setError(error?.data?.message);
      if (error?.data?.message === 'User already exists') {
        setError('User already exists');
      } else {
        console.error('signUp failed:', error);
      }
    }
  };

  return (
    <>
      {contextHolder}
      <div className="p-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <h1 className=" text-primary font-semibold mt-3">Email</h1>
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
              <h1 className=" text-primary font-semibold mt-3">Password</h1>
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

            <button className="px-3 py-1 border my-5 leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary rounded-md">
              Create Account
            </button>
            <div className="mx-auto">
              Already have an account ?{' '}
              <Link className="text-popover font-semibold" to={'/login'}>
                Log In
              </Link>{' '}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
