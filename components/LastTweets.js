import { useState } from "react";
import styles from "../styles/LastTweets.module.css";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function LastTweets() {
  const [likeCount, setLikeCount] = useState(0);

  const tweets = useSelector((state) => state.tweet.value);
  const tweetList = tweets.map((e, i) => (
    <Tweet key={i} username={e.username} message={e.message} date={e.date} /*isLiked={false}*/ />
  ));



  return <div>{tweetList}</div>;
}

export default LastTweets;
