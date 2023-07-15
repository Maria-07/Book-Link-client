/* eslint-disable @typescript-eslint/no-misused-promises */
import { Input } from 'antd';
import { useForm } from 'react-hook-form';

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <h1 className="text-sm text-primary mt-3">Email</h1>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && (
              <p className="font-normal text-sm text-rose-600">
                {errors.email.message}
              </p>
            )}
            <h1 className="text-sm text-primary mt-3">Password</h1>
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              {...register('password', { required: 'Password is required' })}
            />
            {errors.password && (
              <p className="font-normal text-sm text-rose-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button className="px-3 py-1 border my-5 leading-7 text-[15px] bg-popover shadow-md hover:bg-[#804769] text-secondary rounded-md">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
