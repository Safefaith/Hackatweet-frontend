import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftHome}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <div className={styles.bottomLeft}>
            <div className={styles.userContainer}>
              <Image src="/logo.png" alt="Logo" width={50} height={50} />
              <div className={styles.userName}>
                <p>John</p>
                <p>@JohnCena</p>
              </div>
            </div>
            <button className={styles.btnLogout}>Logout</button>
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
