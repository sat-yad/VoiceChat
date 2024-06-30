import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/card/Card";
import Button from "../../components/shared/button/Button";
const Home = () => {
  const signinLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const navigate = useNavigate();
  const startRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <div className={`${styles.CardWrapper}`}>
        <Card title="Welcome to CodersHouse" icon="Logo">
          <p className={`${styles.text}`}>
            We’re working hard to get Codershouse ready for everyone! While we
            wrap up the finishing youches, we’re adding people gradually to make
            sure nothing breaks
          </p>

          <div>
            <Button onClick={startRegister} text="Get your username" />
          </div>

          <div className={`${styles.signinWrapper}`}>
            <span className={`${styles.hasinvite}`}>Have an invite link?</span>
            <Link style={signinLinkStyle} to="/login">
              {" "}
              Sign in
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Home;
