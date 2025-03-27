import styles from "../styles/Login.module.css";
import Image from "next/image";

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../reducers/user';

function Login() {

  const dispatch = useDispatch();
  
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  // Inscription
  const handleRegister = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: signUpUsername, password: signUpPassword }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          dispatch(login({ username: signUpUsername, token: data.token }));
          setSignUpUsername('');
          setSignUpPassword('');
        }
      });
  };

  // Connexion
  const handleConnection = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: signInUsername, password: signInPassword }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername('');
          setSignInPassword('');
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
      <main className={styles.main}>

        <div className={styles.leftMain}>
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
        </div>

        <div className={styles.rightMain}>

          <Image src="/logo.png" alt="Logo" width={80} height={80} />
          <h1 className={styles.h1Main}>See what's happening</h1>
          <h2 className={styles.h2Main}>Join Hackatweet today.</h2>

          /* Inscription */
          <div>
            <button className={styles.signUpBtn} onClick={() => handleRegister()}>Sign up</button>
            <input type="text" placeholder="Username" onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}></input>
            <input type="password" placeholder="Password" onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword}></input>
          </div>

          /* Connexion */
          <div>
            <h3 className={styles.h3Main}>Already have an account?</h3>
            <button className={styles.signInBtn} onClick={() => handleConnection()}>Sign in</button>
            <input type="text" placeholder="Username" onChange={(e) => setSignInUsername(e.target.value)} value={signInUsername}></input>
            <input type="password" placeholder="Password" onChange={(e) => setSignInPassword(e.target.value)} value={signInPassword} ></input>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Login;
