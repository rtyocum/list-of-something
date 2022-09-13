import axios from 'axios';
import { ADD_ITEM, DELETE_ALL_ITEMS, DELETE_ITEM, GET_ITEMS, ITEMS_LOADING } from '../types';

export const getItems = () => (dispatch: Function) => {
    dispatch(setItemsLoading());
    axios.get('api/items').then((res) => {
        console.log(res.data);
        dispatch({
            type: GET_ITEMS,
            payload: res.data,
        });
    });
};

export const addItem = (id: string, item: string) => (dispatch: Function, getState: Function) => {
    const token = getState().auth.token;
    axios
        .post(
            'api/items',
            {
                id,
                item,
            },
            {
                headers: {
                    Authorization: token ? `Bearer ${token}` : '',
                },
            }
        )
        .then((res) => {
            console.log(res.data.date);
            dispatch({
                type: ADD_ITEM,
                payload: res.data,
            });
        });
};

export const deleteItem = (id: string) => (dispatch: Function, getState: Function) => {
    const token = getState().auth.token;
    axios
        .delete(`api/items/${id}`, {
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
            },
        })
        .then((res) => {
            dispatch({
                type: DELETE_ITEM,
                payload: id,
            });
        });
};

export const deleteAllItems = () => (dispatch: Function, getState: Function) => {
    const token = getState().auth.token;
    axios
        .delete('api/items/@all', {
            headers: {
                Authorization: token ? `Bearer ${token}` : '',
            },
        })
        .then((res) => {
            dispatch({
                type: DELETE_ALL_ITEMS,
            });
        });
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING,
    };
};
