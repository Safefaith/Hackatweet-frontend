import styles from "../styles/Hashtag.module.css";
import Image from "next/image";
import { useState } from "react";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Trends from "./Trends";
import Head from "next/head";
import Tweet from "./Tweet";

function Hashtag() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  const tweets = useSelector((state) => state.tweet.value);

  const tweetList = tweets.map((e, i) => {});

  const handleLogout = () => {
    dispatch(logout());
  };

  const [message, setMessage] = useState("");

  return (
    <>
      <Head>
        <title>Hackatweet-Hashtag</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Trends-Hackatweet" />
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
            <h2>Hashtag</h2>
            <div className={styles.inputContainer}>
              <input
                className={styles.hashtagInput}
                placeholder="Search with #"
                type="text"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              ></input>
            </div>
          </div>
          <div className={styles.hashtagSection}>{tweetList}</div>
        </div>
        <div className={styles.rightHome}>
          <h2>Trends</h2>
          <Trends />
        </div>
      </main>
    </>
  );
}

export default Hashtag;
