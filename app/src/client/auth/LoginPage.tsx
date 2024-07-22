import { useAuth, LoginForm } from 'wasp/client/auth';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthWrapper } from './authWrapper';

export default function Login() {
  const history = useHistory();

  const { data: user } = useAuth();

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user, history]);

  return (
    <AuthWrapper>
      <LoginForm />
      <div className="mt-6">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Don't have an account? {' '}
        <Link to='/signup' className='font-medium text-secondary hover:text-secondarydark transition duration-300'>
          Create an account
        </Link>
      </span>
      <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
        <Link to='/request-password-reset' className='text-third hover:text-thirddark transition duration-300'>
          Forgot password?
        </Link>
      </p>
    </div>
    </AuthWrapper>
  );
}
