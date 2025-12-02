// 
import React, { useState } from "react";
import "./header.css";
import NetflixLogo from "../../assets/Images/Netflix_Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
              <img src={NetflixLogo} alt="Netflix Logo" className="logo" width="100" />

          {/* Desktop Menu */}
          <ul className="desktop_menu">
            <li>Home</li>
            <li>TVShow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyLists</li>
            <li>Browse by Languages</li>
          </ul>

          {/* Mobile Browse Button */}
          <div
            className="mobile_browse"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            Browse <ArrowDropDownIcon />
          </div>

          {/* Mobile Dropdown */}
          {showMobileMenu && (
            <ul className="mobile_menu">
              <li>Home</li>
              <li>TVShow</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyLists</li>
              <li>Browse by Languages</li>
            </ul>
          )}
        </div>

        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
