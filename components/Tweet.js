import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTweetFromStore } from "../reducers/tweet";

function Tweet(props) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  // Temps depuis le post du tweet
  const tweetAge = new Date() - props.date; // Âge du tweet en millisecondes
  const TweetAgeMinutes = Math.abs(Math.round(tweetAge / (1000 * 60))); // Conversion en minutes
  const TweetAgeHours = Math.abs(Math.round(tweetAge / (1000 * 60 * 60))); // Conversion en heures
  let tweetAgeDisplay = ""; // Texte à afficher
  if (TweetAgeMinutes >= 60) {
    tweetAgeDisplay = `${TweetAgeHours} hours`;
  } else if (TweetAgeMinutes >= 60) {
    tweetAgeDisplay = "1 hour";
  } else if (TweetAgeMinutes >= 2) {
    tweetAgeDisplay = `${TweetAgeMinutes} minutes`;
  } else if (TweetAgeMinutes >= 1) {
    tweetAgeDisplay = "1 minute";
  } else {
    tweetAgeDisplay = "a few seconds";
  }

  // Identification des hashtags du message
  const formatMessage = (message) => {
    const hashtagRegex = /#\w+/g;
    return message.split(/(\s+)/).map((word, index) => {
      if (hashtagRegex.test(word)) {
        return (
          <span key={index} className={styles.hashtag}>
            {word}
          </span>
        );
      }
      return <span key={index}>{word}</span>;
    });
  };

  // Like tweet
  // let heartIconStyle = { cursor: "pointer" };
  // if (isLiked) {
  //   heartIconStyle = { color: "red", cursor: "pointer" };
  //   setLikeCount(likeCount + 1);
  // } else {
  //   heartIconStyle = { color: "white", cursor: "pointer" };
  //   setLikeCount(likeCount - 1);
  // }

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  // Delete tweet
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTweetFromStore(props));
  };

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetLine}>
        <Image
          src="/elonmusk.png"
          alt="profile image"
          width={50}
          height={50}
          style={{ borderRadius: "100%" }}
        />
        <div className={styles.infosTweetContainer}>
          <span className={styles.pseudo}>{props.username}</span>
          <span className={styles.infosTweet}>
            @{props.username}MUSK - {tweetAgeDisplay}
          </span>
        </div>
      </div>
      <div className={styles.tweetLine}>{formatMessage(props.message)}</div>
      <div className={styles.tweetLine}>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => handleLike()}
          style={{ color: isLiked ? "red" : "white" }}
          className={styles.iconTweet}
        />
        <div className={styles.likeCount}>
          <span> {likeCount}</span>
        </div>
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleDelete()}
          className={styles.iconTweet}
        />
      </div>
    </div>
  );
}

export default Tweet;
