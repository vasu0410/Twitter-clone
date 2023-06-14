import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post--avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post--body">
        <div className="post--header">
          <div className="post--headerText">
            <h3>
              {displayName}{" "}
              <span className="post--headerSpecial">
                {verified && <VerifiedIcon className="post--badge" />} @{username}
              </span>
            </h3>
          </div>
          <div className="post--headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img
        alt=""
        src={image} />
        <div className="post--footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <IosShareIcon fontSize="small" />
            
        </div>
      </div>
    </div>
  );
}

export default Post;
