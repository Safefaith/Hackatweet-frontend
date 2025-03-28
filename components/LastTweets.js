import styles from "../styles/LastTweets.module.css";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function LastTweets() {
  const tweets = useSelector((state) => state.tweet.value);
  const tweetList = tweets.map((e, i) => (
    <Tweet key={i} username={e.username} message={e.message} date={e.date} />
  ));

  // const isLiked = false;
  // const tweets = [<Tweet isLiked={isLiked} />];

  return <div>{tweetList}</div>;
}

export default LastTweets;
