import { useState, useContext } from "react";
import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  SignInAuthUserWithEmailAndPassword,
} from "../../utils/firebase-db/firebase.util";
import FormInput from "../form-input/form-input.component";
import "./sign-in.style.scss";
import { UserContext } from "../../context/user.context";
import Button from "../buttons/buttons.component";

//! Default form field values
const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = () => {
  //! State for form fields
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;

  //! Access to the current user context
  const { setCurrentUser } = useContext(UserContext);

  //! Reset form fields to default values
  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  //! Form submission handler for email/password sign-in
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //! Sign in with email and password, get user data
      const { user } = await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      alert("Success");
      resetFormFields();
    } catch (error) {
      //! Handle authentication errors
      if (error.code === "auth/invalid-login-credentials") {
        alert("Wrong password or email");
        resetFormFields();
      }
    }
  };

  //! Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //! Sign in with Google handler
  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    createUserDocFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Form input fields */}
        <FormInput
          label="Email"
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        {/* Buttons for email/password sign-in and Google sign-in */}
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button onClick={SignInWithGoogle} buttonType="google">
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
