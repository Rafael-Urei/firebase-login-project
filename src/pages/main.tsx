import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { type } from 'os';


export const Main = () => {
    const [user] = useAuthState(auth);
    const { displayName: name } = user || {};

    return (
        <div className='main-background'>
            <div className='circles-container'>
                { user && (
                    <h1>{`Welcome! ${name}`}</h1>
                )}
                <div id='circle-1' className='circle'></div>
                <div id='circle-2' className='circle'></div>
                <div id='circle-3' className='circle'></div>
            </div>
        </div>
    )
};