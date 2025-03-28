import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Tweet(props) {
  const formattedTime = new Date(props.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  // ♥ tweet
  let heartIconStyle = { cursor: "pointer" };
  const handleLike = () => {
    heartIconStyle = { color: "red", cursor: "pointer" };
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
        <span> - {formattedTime}</span>
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
