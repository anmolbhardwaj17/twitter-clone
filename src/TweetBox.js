import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: 'Anmol Bhardwaj',
      username: 'Anmolbhardwaj_',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/profile_images/1306626376242360320/bfkaS3uS_400x400.jpg"
    });

    setTweetMessage("");
    setTweetImage("");

  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://pbs.twimg.com/profile_images/1306626376242360320/bfkaS3uS_400x400.jpg"/>
          <input
          onChange = {(e) => setTweetMessage(e.target.value)} 
          value = {tweetMessage}
          placeholder="What's happening?" type="text"></input>
        </div>
        <input
        value = {tweetImage}
        onChange = {(e) => setTweetImage(e.target.value)}
        className="tweetBox_inputImage" placeholder="Enter image URL" type="text"></input>
        <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
