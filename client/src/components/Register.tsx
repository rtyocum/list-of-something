import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../flux/actions/authActions";
import ItemModal from "./ItemModal";
import styles from "./Register.module.css";

function Register() {
  const menu = useSelector((state: any) => state.menu.menu);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.register}>
      <ItemModal isOpen={menu === "register" ? true : false}>
        <div className={styles.register_box}>
          <h1>Register</h1>
          <form
            className={styles.register_form}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(register({ name, email, password }));
              setName("");
              setEmail("");
              setPassword("");
            }}
          >
            <div className={styles.input_group}>
              <label className={styles.form_label} htmlFor="name">
                Name
              </label>
              <input
                className={styles.form_input}
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
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
              Register
            </button>
          </form>
        </div>
      </ItemModal>
    </div>
  );
}

export default Register;
