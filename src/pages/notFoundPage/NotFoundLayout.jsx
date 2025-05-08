import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";

export default function NotFoundLayout() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.style.setProperty("--bg-color", "#fff");
      root.style.setProperty("--text-color", "#000");
      setTheme("light");
    } else {
      root.style.setProperty("--bg-color", "#050505");
      root.style.setProperty("--text-color", "#fff");
      setTheme("dark");
    }
  };

  return (
    <div className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.eyes}>
          <div className={styles.eye}>
            <div className={`${styles.eyePupil} ${styles.eyePupilRight}`} />
          </div>
          <div className={styles.eye}>
            <div className={`${styles.eyePupil} ${styles.eyePupilRight}`} />
          </div>
        </div>
        <div className={styles.errorPageHeading}>
          <h1 className={styles.errorPageHeadingTitle}>
            Looks like you're lost
          </h1>
          <p className={styles.errorPageHeadingDescription}>404 error</p>
        </div>
        <NavLink to="/" className={styles.errorPageButton}>
          Back to home
        </NavLink>
      </div>
      <button
        className={styles.colorSwitcher}
        onClick={toggleTheme}
        data-theme-color-switch
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
