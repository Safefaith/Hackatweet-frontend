import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

function Home() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);

  const handleLogout = () => {
    dispatch(logout());
  };

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
            <h1>Home</h1>
            <input
              className={styles.tweetInput}
              placeholder="What's up ?"
              type="text"
              maxLength="280"
            ></input>
            <div className={styles.tweetBtnContainer}>
              <span> / 280</span>
              <button className={styles.tweetBtn}>Tweet</button>
            </div>
          </div>
          <div className={styles.tweetSection}>
            <div>
              <div>
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
                <p>Antoine</p>
                <p> @AntoineLeProf</p>
                <p>. 5 hours</p>
              </div>
              <p> Welcome to #hackatweet guys </p>
            </div>
          </div>
        </div>
        <div className={styles.rightHome}></div>
      </main>
    </div>
  );
}

export default Home;
