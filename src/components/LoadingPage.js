import React from "react";
import logo from "../images/starwars_logo.png";
import logo_mobile from "../images/starwars_logo-mobile.png";

const LoadingPage = () => {
  return (
    <div className="loading-wrapper">
      <img
        src={logo_mobile}
        alt="STAR WARS CHARACTERS LIBRARY"
        className="mobile"
      />
      <img src={logo} alt="STAR WARS CHARACTERS LIBRARY" className="logo" />
      <h2>
          Loading data<div className="loader"></div>
        </h2>
    </div>
  );
};

export default LoadingPage;
