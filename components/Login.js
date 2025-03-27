import styles from "../styles/Login.module.css";
import Image from "next/image";
import ModalSignIn from "../components/ModalSignIn";
import ModalSignUp from "./ModalSignUp";
import { useState } from "react";

function Login() {
  //  Etat de la modalSignIn
  const [isOpen, setIsOpen] = useState(false);
  //  Etat de la modalSignUp
  const [isOpenUp, setIsOpenUp] = useState(false);

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftMain}>
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
        </div>

        <div className={styles.rightMain}>
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <h1 className={styles.h1Main}>See what's happening</h1>
          <h2 className={styles.h2Main}>Join Hackatweet today.</h2>
          <div>
            <button
              className={styles.signUpBtn}
              onClick={() => setIsOpenUp(true)}
            >
              Sign Up
            </button>
            {isOpenUp && <ModalSignUp setIsOpenUp={setIsOpenUp} />}
          </div>
          <div>
            <h3 className={styles.h3Main}>Already have an account?</h3>
            <button
              className={styles.signInBtn}
              onClick={() => setIsOpen(true)}
            >
              Sign In
            </button>
            {isOpen && <ModalSignIn setIsOpen={setIsOpen} />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
