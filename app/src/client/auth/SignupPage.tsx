import { SignupForm } from 'wasp/client/auth';
import { Link } from 'react-router-dom';
import { AuthWrapper } from './authWrapper';

export function Signup() {
  return (
    <AuthWrapper>
      <SignupForm />
      <br />
      <span className='text-sm text-gray-700 dark:text-gray-400'>
        Already have an account? {' '}
        <Link to='/login' className='font-medium text-secondary hover:text-secondarydark transition duration-300'>
          Login
        </Link>
      </span>
      <br />
    </AuthWrapper>
  );
}
