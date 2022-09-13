import styles from './Items.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';
import { addItem, deleteAllItems, getItems } from '../flux/actions/listActions';
import { ChangeEvent, useEffect, useState } from 'react';

function Items() {
  const user = useSelector((state: any) => state.auth.user);
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const [newItem, setNewItem]: any = useState({ id: '', item: '' });
  const items = useSelector((state: any) => state.list);
  const loading = useSelector((state: any) => state.list.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.items}>
      {isAuthenticated ? null : (
        <h1 style={{ marginBottom: '20px', color: '#fff' }}>Please login to modify the list</h1>
      )}
      {!(user.permissionLevel & 28) && isAuthenticated ? (
        <h1 style={{ marginBottom: '20px', color: '#fff' }}>You do not have permission to modify the list</h1>
      ) : null}
      {loading ? (
        <h1>Loading</h1>
      ) : (
        items.list.map(({ _id, item, createdBy }: { _id: string; item: string; createdBy: string }) => <Item key={_id} id={_id} item={item} createdBy={createdBy}></Item>)
      )}
      {user.permissionLevel & 28 ? (
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addItem(newItem.id, newItem.item));
            setNewItem({ id: '', item: '' });
          }}
        >
          <div className={styles.new}>
            <input
              className={styles.input_field}
              name="item"
              type="text"
              value={newItem.item}
              placeholder="Item"
              onChange={onChange}
              required
            />
            <button className={`${styles.add_button} ${styles.submit_button}`} type="submit">
              Add
            </button>
          </div>
          {user.permissionLevel & 24 ? (
            <button
              className={styles.button}
              onClick={(e) => {
                e.preventDefault();
                dispatch(deleteAllItems());
              }}
            >
              Delete All
            </button>
          ) : null}
        </form>
      ) : null}
    </div>
  );
}

export default Items;
