import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout } from "../flux/actions/authActions";
import { openLogin, openRegister } from "../flux/actions/menuActions";
import styles from "./Nav.module.css";

function Nav() {
  const user = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.nav}>
        <img className={styles.logo} src="/logo192.png" alt="" />
        <h1 className={styles.heading}>List of Something</h1>
        <div className={styles.log}>
          {user.isAuthenticated ? <h3>{`Hello ${user.user.name}`}</h3> : ""}
          {!user.isAuthenticated ? (
            <button
              className={styles.nav_button}
              onClick={(e) => {
                e.preventDefault();
                dispatch(openLogin());
              }}
            >
              Login
            </button>
          ) : null}
          {user.isAuthenticated ? (
            <button
              className={styles.nav_button}
              onClick={(e) => {
                e.preventDefault();
                dispatch(logout());
              }}
            >
              Logout
            </button>
          ) : null}
          {!user.isAuthenticated ? (
            <button
              className={styles.nav_button}
              onClick={(e) => {
                e.preventDefault();
                dispatch(openRegister());
              }}
            >
              Register
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;
