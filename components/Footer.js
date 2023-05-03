import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <p>Ashraf Kamel</p>
            <p>Ashraf DC 2023</p>
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
