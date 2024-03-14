import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userAtom } from '@/atom/userAuth';
import Link from 'next/link';

const Navbar = () => {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    const storedUser = localStorage.getItem('auth');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  });

  const logout = () => {
    localStorage.removeItem('auth');
    setUser(null);
  };

  return (
    <div className='fixed w-full bg-gray-700 text-white flex justify-between items-center px-4 py-2'>
      <Link href='/' className='font-bold text-2xl'>
        NextApp
      </Link>
      <div>
        {user ? (
          <button onClick={logout} className='px-2 font-semibold'>
            Logout
          </button>
        ) : (
          <>
            <Link href='/auth/login' className='px-2 font-semibold'>
              Login
            </Link>
            <Link href='/auth/signup' className='px-2 font-semibold'>
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
