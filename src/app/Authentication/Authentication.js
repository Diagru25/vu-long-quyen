import { useEffect } from 'react';
import firebase from 'helper/firebaseConfig';
import { useDispatch } from 'react-redux';
import { setLoggedIn, setUser } from 'src/Redux/Auth';

const Authentication = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const x = firebase.auth.onAuthStateChanged(async (user) => {
            if (!user) {
                console.log('not loggedin');
                return;
            }
            else {
                const token = await user.getIdToken();
                console.log(token);
            }

        });

        return () => x();
    }, []);

    return (
        children
    )
}

export default Authentication;
