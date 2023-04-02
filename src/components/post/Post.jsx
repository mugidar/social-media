import React, { useState } from "react";
import "./Post.scss";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";

const Post = ({ name, img, profile_pic, user_id, description }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [likesAmount, setLikesAmount] = useState(
    Math.floor(Math.random() * 10415)
  );
  const [liked, setLiked] = useState(false);
  //temp

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user_info">
            <img src={profile_pic} alt={name} />
            <div className="details">
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={`/profile/${user_id}`}
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
          {img && <img src={`./upload/${img}`} alt="" />}
        </div>
        <div className="info">
          <div
            className="info_item likes"
            onClick={() => {
              setLiked(!liked);
              setLikesAmount((prev) => prev + 1);
            }}
          >
            {liked ? (
              <FavoriteOutlinedIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            <span>{likesAmount}</span>
          </div>
          <div
            className="info_item comments"
            onClick={() => setCommentOpen(!commentOpen)}
          >
            <TextsmsOutlinedIcon />
            <span>42</span>
          </div>
          <div className="info_item">
            <ShareOutlinedIcon />
            <span>Share</span>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
