import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// let btnName = "Login";
// const [btnName, setBtnName] = useState("Login");
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  const items = useSelector((store) => store.cart.items);

  console.log("first", loggedInUser);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="logo" />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 font-bold">Cart {0}</li>
          <button
            className="px-4"
            onClick={() => {
              // console.log("clicked");
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
