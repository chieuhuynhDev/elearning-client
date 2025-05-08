import React from "react";
import FormLogin from "./FormLogin";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <FormLogin />
    </div>
  );
}
