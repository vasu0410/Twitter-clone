import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./Firebase";

function TweetBox() {
    const sendTweet = e =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Vasu Bhensdadiya',
            username: 'vasubhensdadiya',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1555807724977303553/o_REuLmh_400x400.jpg",

        });
        setTweetImage("");
        setTweetMessage("");
    }
    const [tweetMessage,setTweetMessage] = useState("");
    const [tweetImage,setTweetImage] = useState("");
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox--input">
          <Avatar src={require("./splash.png")}></Avatar>
          <input
          onChange={e => setTweetMessage(e.target.value)} 
          value={tweetMessage} placeholder="What's happening?" type="text" />
        </div>
        
        <input 
        value={tweetImage}
        onChange={e => setTweetImage(e.target.value)} 
        className="tweetBox--imageInput"
        placeholder="Optional: Enter image URL" type="text" />

        <Button
        onClick={sendTweet} 
        type="submit" className="tweetBox--tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
