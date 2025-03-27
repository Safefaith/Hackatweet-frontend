import styles from "../styles/Login.module.css";
import Image from "next/image";
import ModalSignIn from "../components/ModalSignIn";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";

function Login() {
  const dispatch = useDispatch();

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  //  Etat de la modalSignIn
  const [isOpen, setIsOpen] = useState(false);

  // Inscription
  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpUsername("");
          setSignUpPassword("");
        }
      });
  };

  // Connexion
  const handleConnection = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  // Déconnexion (à implanter dans un bouton)
  /*
  const handleLogout = () => {
    dispatch(logout());
    dispatch(removeAllBookmark());
  };
  */

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
          <h1 className={styles.h1Main}>See what's happening</h1>
          <h2 className={styles.h2Main}>Join Hackatweet today.</h2>
          <div>
            <Link href="/home">
              <button
                className={styles.signUpBtn}
                onClick={() => handleRegister()}
              >
                Sign up
              </button>
            </Link>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setSignUpUsername(e.target.value)}
              value={signUpUsername}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setSignUpPassword(e.target.value)}
              value={signUpPassword}
            ></input>
          </div>
          <div>
            <h3 className={styles.h3Main}>Already have an account?</h3>
            <button onClick={() => setIsOpen(true)}>Sign In</button>
            {isOpen && <ModalSignIn setIsOpen={setIsOpen} />}
            {/* <Link href="/home">
              <button
                className={styles.signInBtn}
                onClick={() => handleConnection()}
              >
                Sign in
              </button>
            </Link> */}
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setSignInUsername(e.target.value)}
              value={signInUsername}
            ></input>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setSignInPassword(e.target.value)}
              value={signInPassword}
            ></input>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
