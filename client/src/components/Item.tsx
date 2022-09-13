import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../flux/actions/listActions';
import styles from './Item.module.css';

function Item(props: any) {
    const user = useSelector((state: any) => state.auth.user);
    const dispatch = useDispatch();
    return (
        <div className={styles.item_container}>
            <h3 className={styles.item}>{props.item}</h3>
            {(user.permissionLevel & 24) || (props.createdBy === user.id) ? (
                <button
                    className={styles.button}
                    onClick={() => {
                        console.log(props.id);
                        dispatch(deleteItem(props.id));
                    }}
                >
                    Delete
                </button>
            ) : null}
        </div>
    );
}

export default Item;
