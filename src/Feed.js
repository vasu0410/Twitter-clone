import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "./Firebase";

function Feed() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    },[]);
    posts.map(post=>{
        console.log(post.displayName);
    })
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed--header">
        <h2>Home</h2>
      </div>
        
      {/* Tweet box */}
        <TweetBox />
        
      {/* Post */}
        {posts.map(post=>(
            <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image} 
            />
        ))}

    </div>
  );
}

export default Feed;
