import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"



const Header = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              navigate("/browse");
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
            }
          });

          // I want to unsubscribe whenever my component is unmount. So unsubscribe when component unmount
          return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }

  return (
    <div className="absolute w-screen px-5 py-2 bg-gradient-to-b from-black z-20 flex justify-between">
        <img className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"/>
        <div className="m-4">
            <button onClick={handleSignOut} className="font-bold text-white text-md bg-red-600 my-auto rounded-sm p-1">Sign out</button>
        </div>
    </div>
  )
}

export default Header