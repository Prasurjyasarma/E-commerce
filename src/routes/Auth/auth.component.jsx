// import { GoogleAuthProvider } from "firebase/auth";
// import {
//   signInWithGooglePopup,
//   createUserDocFromAuth,
// } from "../../utils/firebase-db/firebase.util";
import SignUpForm from "../../components/sign-up-form/sign-up.component";
import SignInForm from "../../components/sign-in-form/sign-in.component";
import "./auth.style.scss";
import ProfileSection from "../../components/profile-section/profile-section.component";
import { UserContext } from "../../context/user.context";
import { useContext } from "react";
const Auth = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      {currentUser ? (
        <ProfileSection />
      ) : (
        <div className="auth">
          <SignInForm />
          <img
            src="https://www.freepnglogos.com/uploads/line-png/straight-vertical-line-transparent-27.png"
            alt="img"
          />
          <SignUpForm />
        </div>
      )}
    </>
  );
};

export default Auth;
