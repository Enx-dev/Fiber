import React from "react";
import {
  Delete,
  Info,
  Label,
  Wrapper,
  ProfileImg,
  ProfileEmail,
  ProfileName,
  Image,
  DeleteText,
  Wraning,
  DeleteBtn,
} from "./Styles";
const Profile = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Profile.Label = ({ children, text }) => (
  <Label>
    {text}
    {children}
  </Label>
);
Profile.Delete = ({ children }) => <Delete>{children}</Delete>;
Profile.Info = ({ children }) => <Info>{children}</Info>;
Profile.Image = ({ children }) => <Image>{children}</Image>;
Profile.ProfileName = ({ name }) => <ProfileName>{name}</ProfileName>;
Profile.DeleteText = ({ name }) => (
  <DeleteText>
    {name} <a href="">Contact us</a>
  </DeleteText>
);
Profile.Wraning = ({ name }) => <Wraning>{name}</Wraning>;
Profile.DeleteBtn = ({ remove }) => (
  <DeleteBtn onClick={() => remove()}>Delete</DeleteBtn>
);
Profile.ProfileEmail = ({ emial }) => <ProfileEmail>{emial}</ProfileEmail>;
Profile.ProfileImg = ({ src }) => <ProfileImg src={src} />;

export default Profile;
