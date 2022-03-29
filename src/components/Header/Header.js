import React from "react";
import CustomLinks from "./../CustomLinks/CustomLinks";
import './Header.css'

const Header = () => {
  return (
    <div>
      <h1>Here routers works under this h1 tag</h1>
      <nav className="links">
        <CustomLinks to="/">Home</CustomLinks>
        <CustomLinks to="/friends">Friends</CustomLinks>
        <CustomLinks to='/posts'>Posts</CustomLinks>
        <CustomLinks to="/about">About</CustomLinks>
      </nav>
    </div>
  );
};

export default Header;
