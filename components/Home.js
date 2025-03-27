import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Tweet from "./Tweet";
import Head from "next/head";

function Home() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  const handleLogout = () => {
    dispatch(logout());
  };

  const [message, setMessage] = useState("");

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
            <Link href="/trends">
              <button>Go to Trends Page</button>
            </Link>
            <Tweet />
          </div>
        </div>

        <div className={styles.rightHome}>
          <h2>Trends</h2>
        </div>
      </main>
    </div>
  );
}

export default Home;
