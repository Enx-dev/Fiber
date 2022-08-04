/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  deleteUser,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
} from "firebase/auth";
import { app } from "./config";
import { useNavigate } from "react-router";

const AuthContext = createContext();

export const auth = getAuth(app);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  async function SignInEmail(email, password) {
    setIsloading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        setUser(currentUser.user);
        navigate("/home");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  }
  async function SignUpEmail(email, password, name) {
    setIsloading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((users) => {
        setError("");
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsloading(false);
        console.log(user);
      });
    if (error === "Firebase: Error (auth/email-already-in-use).") {
      toast.error("Account already exist. Sign In", {
        pauseOnHover: false,
      });
    }
    if (!error) {
      await sendEmailVerification(auth.currentUser)
        .then(() => console.log("sent"))
        .catch((err) => console.log(err.message));
      await updateProfile(auth.currentUser, { displayName: name }).then(() => {
        setUser(auth.currentUser);
        if (auth.currentUser) {
          navigate("/home");
        }
      });
    }
  }
  async function SignOut() {
    setIsloading(true);
    await signOut(auth)
      .then(() => {
        setUser(null);
        setError("");
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      })
      .finally(() => {
        setIsloading(true);
      });
  }
  async function SignInGoogle() {
    setIsloading(true);
    await signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        setUser(result.user);
        navigate("/home");
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsloading(false);
      });
  }
  async function ForgotPassword(email) {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("");
        navigate("/signin");
      })
      .catch((err) => {
        setError(err.message);
        console.log(err.message);
      });
  }
  async function DeleteUser() {
    console.log(auth.currentUser);
    await reauthenticateWithCredential(auth.currentUser);
    deleteUser(auth.currentUser).then(() => navigate("/"));
  }
  async function sendVerifyEmail() {
    await sendEmailVerification(user)
      .then(() => toast.success("SENT,check your spam mail"))
      .catch((err) => toast.error(err.message));
  }
  return (
    <AuthContext.Provider
      value={{
        SignInEmail,
        user,
        SignUpEmail,
        setUser,
        isLoading,
        error,
        SignOut,
        SignInGoogle,
        ForgotPassword,
        DeleteUser,
        sendVerifyEmail,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
