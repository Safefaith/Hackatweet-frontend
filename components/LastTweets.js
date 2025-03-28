import styles from '../styles/LastTweets.module.css';
import Tweet from './Tweet';


function LastTweets() {

  const tweets = <Tweet/>;


  return (
    <div>
        { tweets }
    </div>
  );
}

export default LastTweets;