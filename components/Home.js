import styles from "../styles/Home.module.css";

import { useState } from "react";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";

import LastTweets from "./LastTweets";
import Trends from "./Trends";
import Head from "next/head";
import { addTweetToStore } from "../reducers/tweet";

function Home() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() === "") return;

    dispatch(addTweetToStore({ username, message, date: new Date() }));
    setMessage("");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Head>
        <title>Hackatweet-Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Home-Hackatweet" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={styles.main}>
        <div className={styles.leftHome}>
          <Link href="/home">
            <Image
              className={styles.logo}
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </Link>
          <div className={styles.bottomLeft}>
            <div className={styles.userContainer}>
              <Image
                style={{ borderRadius: "100%" }}
                src="/elonmusk.png"
                alt="Logo"
                width={50}
                height={50}
              />
              <div className={styles.userName}>
                <span>{username}</span>
                <p>@{username}MUSK</p>
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
              <button
                onClick={() => handleSubmit()}
                className={styles.tweetBtn}
              >
                Tweet
              </button>
            </div>
          </div>
          <div className={styles.tweetSection}>
            {/* <Link href="/hashtag">
              <button>Go to Trends Page</button>
            </Link> */}
            <LastTweets />
          </div>
        </div>

        <div className={styles.rightHome}>
          <Link href="/hashtag">
            <h2>Trends</h2>
          </Link>

          <div className={styles.trendsContainer}>
            <Trends />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
