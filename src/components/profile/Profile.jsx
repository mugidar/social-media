import React from "react";
import { useParams } from "react-router-dom";
import "./Profile.scss";
import Posts from "../posts/Posts.jsx";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Profile = () => {
  const { id } = useParams();

  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="banner"
        />
        <img
          src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="profile"
        />
      </div>
      <div className="profile_container">
        <div className="profile_user_info">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="middle">
            <span>My Name</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Ukraine</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Ukrainian</span>
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <AlternateEmailIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
     
    </div>
  );
};

export default Profile;
