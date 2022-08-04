import React, { useState } from "react";
import BrandLogo from "../../Components/Common/BrandLogo";
import Navbar from "../../Components/Home/Navbar/Navbar";
import menuIcon from "../../Assets/Hamburger Menu.svg";
import Menu from "../../Components/Home/Navbar/Menu/Menu";
import { Link, Links, SignIn } from "../../Components/Home/Navbar/Common";
import Button from "../../Components/Common/Button";
import { Link as NavLink } from "react-router-dom";
const NavSection = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <Navbar>
        <BrandLogo />
        <Navbar.MenuIcon toggleMenu={setToggleMenu} src={menuIcon} />
        <Navbar.ResWrapper>
          <Navbar.ResLinks>
            <Navbar.ResLink text="Community" />
            <Navbar.ResLink text="Pricing" />
            <Navbar.ResLink text="Features" />
          </Navbar.ResLinks>
          <div
            style={{
              display: "flex",
              fontSize: "1.3rem",
              alignItems: "center",
              gap: "4rem",
            }}>
            <NavLink to="/signin">
              <Navbar.ResSignIn text="Sign in" />
            </NavLink>
            <NavLink to="/signup">
              <Button text="Sign up" />
            </NavLink>
          </div>
        </Navbar.ResWrapper>
      </Navbar>{" "}
      {toggleMenu && (
        <Menu>
          <Links>
            <Link>Community</Link>
            <Link>Pricing</Link>
            <Link>Features</Link>
          </Links>
          <NavLink className="signin" to="/signin">
            <SignIn>Sign In</SignIn>
          </NavLink>
          <NavLink className="signup" to="/signup">
            <Button color text="Sign Up" />
          </NavLink>
        </Menu>
      )}
    </>
  );
};

export default NavSection;
