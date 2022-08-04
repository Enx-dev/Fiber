import React from "react";
import Profile from "../../Components/Dashbord/Profile/Profile";
import { useAuth } from "../../Firebase/authContex";
import avaterImg from "../../Assets/avataaars.svg";
const ProfileContainer = () => {
  const { user } = useAuth();
  return (
    <Profile>
      <Profile.Info>
        <Profile.Label>
          <Profile.Image>
            <Profile.ProfileImg src={user.photoURL || avaterImg} />
            {/* Todo Add Upload image*/}
            {/* <input
              className="custom-file-input"
              type="file"
              accept="image/*"
              onChange={(e) => setImg(e.target.files)}
            /> */}
          </Profile.Image>
        </Profile.Label>
        <Profile.ProfileName name={user.displayName} />
        <Profile.ProfileEmail emial={user.email} />
        {/* Todo Add Delete Functionality*/}
      </Profile.Info>
      {/* <Profile.Delete>
        <Profile.Wraning name="Dangerous Area" />
        <Profile.DeleteText name="This Action is Irreversible. Having Issuses?" />
        <Profile.DeleteBtn remove={DeleteUser} />
      </Profile.Delete> */}
    </Profile>
  );
};

export default ProfileContainer;
