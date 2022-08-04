import React, { useEffect } from "react";
import SIgnin from "../Container/Signin/SIgnin";
import { useAuth } from "../Firebase/authContex";
import { useNavigate } from "react-router";
const Signup = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home", { replace: true });
    }
  }, [user, navigate]);
  return <SIgnin />;
};

export default Signup;
