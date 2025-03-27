import styles from "../styles/Login.module.css";
import Image from "next/image";

function Login() {
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
          <button className={styles.signUpBtn}>Sign up</button>
          <h3 className={styles.h3Main}>Already have an account?</h3>
          <button className={styles.signInBtn}>Sign in</button>
        </div>
      </main>
    </div>
  );
}

export default Login;
