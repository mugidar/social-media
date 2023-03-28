import React, { useContext } from "react";
import "./NavBar.scss";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@mui/icons-material";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const NavBar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);


  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>GOPO SOCIAL</span>
        </Link>
        <HomeOutlined />
        <span className="darkmode_icon" onClick={toggleDarkMode}>
          {darkMode ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
        </span>

        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="search" name="search" placeholder="search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.img}
            alt=""
          />
          <span>{currentUser.name} {currentUser.lastname}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
