import React from "react";
import VerifyEmail from "../../Components/Dashbord/VerifyEmail/VerifyEmail";
import { useAuth } from "../../Firebase/authContex";
const VerifyEmailComp = () => {
  const { sendVerifyEmail } = useAuth();
  return (
    <VerifyEmail>
      <VerifyEmail.Text text="You Account is unverified and will be blocked in 3days" />
      <VerifyEmail.VerifyBtn verify={sendVerifyEmail} />
    </VerifyEmail>
  );
};

export default VerifyEmailComp;
