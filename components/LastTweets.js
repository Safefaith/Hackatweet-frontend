import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';


function LastTweets() {
    
    const isLiked = false;
    const tweets = [
        < Tweet isLiked={isLiked} />
    ]

  return (
    <div>
        { tweets }
    </div>
  );
}

export default LastTweets;