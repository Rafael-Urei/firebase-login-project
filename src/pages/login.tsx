import { auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate }  from 'react-router-dom';
import google from '../google.svg';
import purplebg from '../purplebg.jpg';

export const Login = () =>  {

    const navigate = useNavigate();

    const signInWIthGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/')
    };

    const preventEvent = (e: React.ChangeEvent<HTMLFormElement>)  => e.preventDefault(); 

    return (
        <main className='login-main'>
            <div className='login-container'>
                <h1 className='login-title'>Login</h1>
                <form action="submit" onSubmit={preventEvent}>
                    <label className='login-label'>Username:</label>
                    <input type="text" name='user' placeholder='e.g Janne Appleseed' autoComplete='no'/>
                    <label className='login-label'>Password:</label>
                    <input type='password' name='password' placeholder='e.g yourName1237694'/>
                    <button>Sign in</button>
                    <p>Or Sign In With Google</p>
                    <button
                    className='google-login-btn'
                    onClick={signInWIthGoogle}>
                    Sign In With Google
                    <img className='google-logo' src={google} height='20px' width='20px' alt='google-logo'/>
                </button>
                </form>
            </div>
        </main>
    )
};