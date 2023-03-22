import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../logo.svg';

export const Navbar = () =>  {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav>
            <img
                className='logo-icon'
                src={logo}
                height='30px'
                width='30px'>
            </img>
            <div className='container-link'>
                <Link id='link-1' className='link' to='/'>Home</Link>
                <Link id='link-2' className='link' to='/login'>Login</Link>
            </div>
            <div className='user-data'>
                <p className='user-name'>{user?.displayName}</p>
                <img
                    className='profile-picture'
                    src={user?.photoURL || ''}
                    width='30'
                    height='30'>
                </img>
            </div>
        </nav>
    )
};