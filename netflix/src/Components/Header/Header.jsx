import React from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.svg";
import bell from "../../assets/bell_icon.svg";
import caret from "../../assets/caret_icon.svg";
import profile from "../../assets/profile_img.png";
import {
  FaBell,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaCaretDown,
} from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="header_outer_wrapper">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={logo} alt="Netflix" width={100} />
              </li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movie</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <FaSearch />
              </li>
              <li>
                <FaBell />
              </li>
              <li>
                <FaUser />
              </li>
              <li>
                <FaCaretDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
