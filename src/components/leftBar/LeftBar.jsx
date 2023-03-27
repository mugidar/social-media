import React from "react";
import "./LeftBar.scss";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import VideoCameraBackOutlinedIcon from "@mui/icons-material/VideoCameraBackOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const generalItems = [
  { title: "Friends", icon: <Diversity3OutlinedIcon /> },
  { title: "Groups", icon: <Groups2OutlinedIcon /> },
  { title: "Marketplace", icon: <StorefrontOutlinedIcon /> },
  { title: "Watch", icon: <SlideshowOutlinedIcon /> },
  { title: "Memories", icon: <StorageOutlinedIcon /> }
];

const shortcutsItems = [
  { title: "Events", icon: <EventNoteOutlinedIcon /> },
  { title: "Games", icon: <SportsEsportsOutlinedIcon /> },
  { title: "Gallery", icon: <CollectionsOutlinedIcon /> },
  { title: "Videos", icon: <VideoCameraBackOutlinedIcon /> },
  { title: "Messages", icon: <EmailOutlinedIcon /> }
];

const otherItems = [
  { title: "Fundraiser", icon: <SavingsOutlinedIcon /> },
  { title: "Tutorials", icon: <HelpOutlinedIcon /> },
  { title: "Courses", icon: <MenuBookOutlinedIcon  /> },
];

const LeftBar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="left-bar_list general">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span className="left-bar_list-title">Jirnaya Kastrulya</span>
            </div>
            {generalItems.map((item) => (
              <div className="item">
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
          <div className="left-bar_list shortcuts">
            <span className="left-bar_list-title">Your shortcuts</span>
            {shortcutsItems.map((item) => (
              <div className="item">
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
          <div className="left-bar_list others">
            <span className="left-bar_list-title">Others</span>
            {otherItems.map((item) => (
              <div className="item">
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
