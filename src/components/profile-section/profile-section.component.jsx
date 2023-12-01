import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import Button from "../buttons/buttons.component";
import "./profile-section.style.scss";
import { signOutUser } from "../../utils/firebase-db/firebase.util";
import { useState } from "react";

const ProfileSection = () => {
  const [hasLink] = useState(true);

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  console.log(currentUser);
  return (
    <div className="profile-section">
      <h3>Name :</h3>
      <h1>{currentUser.displayName}</h1>
      <h3>Email :</h3>
      <h1>{currentUser.email}</h1>
      {hasLink && currentUser.photoURL ? (
        <img src={currentUser.photoURL} alt="ProfileImage" />
      ) : (
        <img
          src="https://images.pexels.com/photos/18397365/pexels-photo-18397365/free-photo-of-silhouette-of-woman-covering-face-with-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="alteredimage"
        />
      )}

      <Button buttonType="inverted" onClick={signOutHandler}>
        sign out
      </Button>
    </div>
  );
};

export default ProfileSection;
