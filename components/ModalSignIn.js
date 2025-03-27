import React from "react";
import styles from "../styles/ModalSignIn.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";
import Link from "next/link";

const ModalSignIn = ({ setIsOpen }) => {
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const dispatch = useDispatch();

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
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setSignInUsername("");
          setSignInPassword("");
        }
      });
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
        <div className={styles.centered}>
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <Image src="/logo.png" alt="Logo" width={80} height={80} />
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h5 className={styles.modalContent}>Connect to Hackatweet</h5>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <div className={styles.inputModalContainer}>
                  <input
                    onChange={(e) => setSignInUsername(e.target.value)}
                    value={signInUsername}
                    className={styles.inputModal}
                    type="text"
                    placeholder="Username"
                  ></input>
                  <input
                    onChange={(e) => setSignInPassword(e.target.value)}
                    value={signInPassword}
                    className={styles.inputModal}
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>

                <Link href="/home">
                  <button
                    className={styles.signInBtn}
                    onClick={() => handleConnection()}
                  >
                    Sign in
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSignIn;
