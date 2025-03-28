import styles from "../styles/Trends.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

function Trends() {
  const tweetList = useSelector((state) => state.tweet.value);

  const extractHashtags = (message) => {
    const hashtagRegex = /#\w+/g; //
    return message.match(hashtagRegex) || [];
  };

  const trendsList = tweetList
    .map((e, i) => extractHashtags(e.message))
    .filter((hashtag, index, self) => self.indexOf(hashtag) === index);

  return (
    <div className={styles.trendsContainer}>
      {trendsList.length > 0 ? (
        trendsList.map((hashtag, i) => (
          <span key={i} className={styles.hashtag}>
            {hashtag}
          </span>
        ))
      ) : (
        <p>No trends found</p>
      )}
    </div>
  );
}

export default Trends;
