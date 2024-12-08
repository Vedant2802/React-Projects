import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// let btnName = "Login";
// const [btnName, setBtnName] = useState("Login");
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              // console.log("clicked");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;