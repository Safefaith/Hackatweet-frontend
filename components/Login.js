import styles from "../styles/Login.module.css";
import Image from "next/image";
import { useState } from "react";
import ModalSignUp from "./Signup";
import Link from "next/link";

function Login() {
  return (
    <div>
      {/* <ModalSignUp isOpen={isOpen} handleClose={handleClose}>
        <header>
          <h1>Hello world</h1>
        </header>
      </ModalSignUp> */}
      <main className={styles.main}>
        <div className={styles.leftMain}>
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
        </div>
        <div className={styles.rightMain}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <Link href="/home">
            <button>Page Home</button>
          </Link>
          <h1 className={styles.h1Main}>See what's happening</h1>
          <h2 className={styles.h2Main}>Join Hackatweet today.</h2>
          <button className={styles.signUpBtn}>Sign up</button>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <h3 className={styles.h3Main}>Already have an account?</h3>
          <button className={styles.signInBtn}>Sign in</button>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
        </div>
      </main>
    </div>
  );
}

export default Login;
