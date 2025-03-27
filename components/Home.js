import styles from "../styles/Home.module.css";

import { useState } from "react";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";

import LastTweets from "./LastTweets";
import Trends from "./Trends";

function Home() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  const handleLogout = () => {
    dispatch(logout());
  };

  const [message, setMessage] = useState('');


  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftHome}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <div className={styles.bottomLeft}>
            <div className={styles.userContainer}>
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
              <div className={styles.userName}>
                <span>{username}</span>
                <p>@{username}</p>
              </div>
            </div>
            <Link href="/">
              <button
                onClick={() => handleLogout()}
                className={styles.btnLogout}
              >
                Logout
              </button>
            </Link>
          </div>
        </div>

        <div className={styles.mainHome}>
          <div className={styles.topMainHome}>
            <h2>Home</h2>
            <input
              className={styles.tweetInput}
              placeholder="What's up?"
              type="text"
              maxLength="280"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            ></input>
            <div className={styles.tweetBtnContainer}>
              <span>{message.length}/280</span>
              <button className={styles.tweetBtn}>Tweet</button>
            </div>
          </div>
          <div className={styles.tweetSection}>
            <LastTweets/>
          </div>
        </div>

        <div className={styles.rightHome}>
          <h2>Trends</h2>
        </div>
        <div className={styles.trendsContainer}>
          {Trends}
        </div>
      </main>
    </div>
  );
}

export default Home;
