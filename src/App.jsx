import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//Component
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import SignIn from "./Pages/SignIn";
import { AuthProvider } from "./Firebase/authContex";
import Layout from "./Pages/Layout";
import ForgotPassword from "./Pages/ForgotPassword";
import ProtectedRoute from "./Firebase/ProtectedRoute";
import DashboardPage from "./Container/Dashboard/Dashboard";
import ProfileContainer from "./Container/Dashboard/ProfileContainer";
import ContactPage from "./Container/Dashboard/ContactPage";
import Error from "./Pages/Error";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
            <Route
              index
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <ProfileContainer />
                </ProtectedRoute>
              }
            />
            <Route
              path="contact"
              element={
                <ProtectedRoute>
                  <ContactPage />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/resetpassword" element={<ForgotPassword />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer
          position="top-left"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </AuthProvider>
    </Router>
  );
}

export default App;
