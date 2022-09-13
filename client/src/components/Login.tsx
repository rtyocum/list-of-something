import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../flux/actions/authActions";
import ItemModal from "./ItemModal";
import styles from "./Login.module.css";

function Login() {
  const menu = useSelector((state: any) => state.menu.menu);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.login}>
      <ItemModal isOpen={menu === "login" ? true : false}>
        <div className={styles.login_box}>
          <h1>Login</h1>
          <form
            className={styles.login_form}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(login({ email, password }));
              setEmail("");
              setPassword("");
            }}
          >
            <div className={styles.input_group}>
              <label className={styles.form_label} htmlFor="email">
                Email
              </label>
              <input
                className={styles.form_input}
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.input_group}>
              <label className={styles.form_label} htmlFor="password">
                Password
              </label>
              <input
                className={styles.form_input}
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
          </form>
        </div>
      </ItemModal>
    </div>
  );
}

export default Login;
