import React from "react";
import styles from "../styles/ModalSignUp.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/user";
import Link from "next/link";

const ModalSignUp = ({ setIsOpenUp }) => {
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const dispatch = useDispatch();

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

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpenUp(false)}>
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
              onClick={() => setIsOpenUp(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h5 className={styles.modalContent}>
              Create your Hackatweet account
            </h5>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <div className={styles.inputModalContainer}>
                  <input
                    onChange={(e) => setSignUpUsername(e.target.value)}
                    value={signUpUsername}
                    className={styles.inputModal}
                    type="text"
                    placeholder="Username"
                  ></input>
                  <input
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    value={signUpPassword}
                    className={styles.inputModal}
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>

                <Link href="/home">
                  <button
                    className={styles.signInBtn}
                    onClick={() => handleRegister()}
                  >
                    Sign up
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

export default ModalSignUp;
