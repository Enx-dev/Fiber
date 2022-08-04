import React, { useEffect } from "react";
import { useAuth } from "./authContex";
import { useNavigate } from "react-router";
import { auth } from "./authContex";
import { onAuthStateChanged } from "firebase/auth";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate("/signin", { replace: true });
      }
      setUser(currentUser);
    });
  }, [navigate, setUser]);

  return <>{user && <div style={{ width: "100%" }}>{children}</div>}</>;
};

export default ProtectedRoute;
