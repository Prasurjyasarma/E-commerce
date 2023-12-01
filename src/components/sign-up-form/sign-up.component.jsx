import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase-db/firebase.util";
import FormInput from "../../components/form-input/form-input.component";
import "./sign-up.style.scss";
import Button from "../buttons/buttons.component";
import { UserContext } from "../../context/user.context";

//! Default form field values
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  //! State for form fields
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;

  //! Access to the current user context
  const { setCurrentUser } = useContext(UserContext);

  //! Reset form fields to default values
  const resetFormFields = () => {
    setFormFields(defaultFormField);
  };

  //! Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    //! Check if passwords match
    if (password !== confirmPassword) {
      alert("Password doesn't match");
      resetFormFields();
      return;
    }

    try {
      //! Create authentication user and get user data
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(`Display Name: ${displayName}`);

      //! Set current user in the context
      setCurrentUser(user);

      //! Reset form fields and display success message
      resetFormFields();
      alert("Successfully created");

      //! Create user document in Firestore
      await createUserDocFromAuth(user, { displayName });
    } catch (error) {
      //! Handle authentication errors
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User creation encountered an error", error);
      }
    }
  };

  //! Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        {/* Form input fields */}
        <FormInput
          label="Display Name"
          required
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />
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
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />
        {/* Submit button */}
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
