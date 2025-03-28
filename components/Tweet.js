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
  // ♥ tweet
  let heartIconStyle = { cursor: "pointer" };
  const handleLike = () => {
    props.isLiked = !isLiked;
    isLiked
      ? (heartIconStyle = { color: "red", cursor: "pointer" })
      : (heartIconStyle = { color: "white", cursor: "pointer" });
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
            @{props.username}MUSK - {formattedTime}
          </span>
        </div>
      </div>
      <div className={styles.tweetLine}>{formatMessage(props.message)}</div>
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
