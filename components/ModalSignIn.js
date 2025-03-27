import React from "react";
import styles from "../styles/ModalSignIn.module.css";
import Image from "next/image";

const ModalSignIn = ({ setIsOpen }) => {
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
            ></button>
            <h5 className={styles.modalContent}>Connect to Hackatweet</h5>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <div className={styles.inputModalContainer}>
                  <input
                    className={styles.inputModal}
                    type="text"
                    placeholder="Username"
                  ></input>
                  <input
                    className={styles.inputModal}
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>

                <button
                  className={styles.signInBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSignIn;
