import styles from "../styles/Tweet.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

function Tweet(props) {
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
        <span>@Username</span>
        <span> - age of the tweet</span>
      </div>
      <div className={styles.tweetLine}>
        Contenu du tweet <span className={styles.hashtag}>#nomDuHashTag</span>
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
