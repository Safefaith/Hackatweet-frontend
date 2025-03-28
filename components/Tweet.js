import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Tweet(props) {

  // Temps depuis le post du tweet
  const tweetAge = new Date() - props.date; // Âge du tweet en millisecondes
  const TweetAgeMinutes = Math.abs(Math.round(tweetAge / (1000 * 60 ))); // Conversion en minutes
  const TweetAgeHours = Math.abs(Math.round(tweetAge / (1000 * 60 * 60 ))); // Conversion en heures
  let tweetAgeDisplay = ''; // Texte à afficher
  if (TweetAgeMinutes >= 60) {
    tweetAgeDisplay = `${TweetAgeHours} hours`;
  } else if (TweetAgeMinutes >= 60) {
    tweetAgeDisplay = '1 hour';
  } else if (TweetAgeMinutes >= 2) {
    tweetAgeDisplay = `${TweetAgeMinutes} minutes`;
  } else if (TweetAgeMinutes >= 1) {
    tweetAgeDisplay = '1 minute';
  } else {
    tweetAgeDisplay = 'a few seconds';
  };


  // ♥ tweet
  let heartIconStyle = { cursor: "pointer" };
  const handleLike = () => {
    props.isLiked = !isLiked;
    isLiked ? heartIconStyle = { color: "red", cursor: "pointer" } : heartIconStyle = { color: "white", cursor: "pointer" };
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
        <span>@{props.username}</span>
        <span> - {tweetAgeDisplay}</span>
      </div>
      <div className={styles.tweetLine}>
        {props.message} <span className={styles.hashtag}>#nomDuHashTag</span>
      </div>
      <div className={styles.tweetLine}>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => handleLike()}
          style={heartIconStyle}
          className={styles.iconTweet}
        />
        <span>(like count) </span>
        <FontAwesomeIcon className={styles.iconTweet} icon={faTrash} />
      </div>
    </div>
  );
}

export default Tweet;
