import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  // console.log("Rendering Navigation");
  const brandStyle = {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "22px",
    cursor: "pointer",
    display: "flex",
    alignitems: "center",
  };

  const logoText = {
    marginLeft: "10px",
  };
  return (
    <>
      <nav className={`${styles.navbar} container`}>
        <Link style={brandStyle} to="/">
          <img src="/images/Logo.png" alt="logo" />
          <span style={logoText}> CodersHouse</span>
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
