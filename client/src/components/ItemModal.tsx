import { useDispatch } from "react-redux";
import { closeMenu } from "../flux/actions/menuActions";
import styles from "./ItemModal.module.css";

function ItemModal(props: any) {
  const dispatch = useDispatch();
  return (
    <div
      className={
        props.isOpen
          ? `${styles.modal_main} ${styles.active}`
          : styles.modal_main
      }
    >
      <div className={styles.modal}>
        
        <svg
          className={styles.close}
          onClick={() => {
            dispatch(closeMenu());
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <div className={`${styles.modal_box} ${props.className}`}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
