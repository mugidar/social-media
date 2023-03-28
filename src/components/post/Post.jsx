import React from "react";
import "./Post.scss";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";

const Post = ({ name, img, profilePic, userId, description }) => {
  //temp
  const liked = false;

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user_info">
            <img src={profilePic} alt={name} />
            <div className="details">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/profile/${userId}`}
              >
                <span>{name}</span>
              </Link>
              <span className="post_date">1 min ago</span>
            </div>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="content">
          <p>{description}</p>
          <img src={img} alt="" />
        </div>
        <div className="info">
          <div className="info_item">
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span>12 Likes</span>
          </div>
          <div className="info_item">
            <TextsmsOutlinedIcon />
            <span>42 Comments</span>
          </div>
          <div className="info_item">
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
