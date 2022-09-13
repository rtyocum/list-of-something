import axios from 'axios';
import {
  AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from '../types';
import { clearErrors, returnErrors } from './errorActions';
import { closeMenu } from './menuActions';

export const loadUser = () => (dispatch: Function) => {
  dispatch({
    type: USER_LOADING,
  });
  axios
    .post('auth/token')
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const login =
  ({ email, password }: any) =>
  (dispatch: Function) => {
    dispatch({
      type: USER_LOADING,
    });
    console.log(password);
    axios
      .post('auth/login', {
        email,
        password,
      })
      .then((res) => {
        dispatch(clearErrors());
        dispatch(closeMenu());
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'));
        dispatch({
          type: LOGIN_FAILED,
        });
      });
  };

export const register =
  ({ name, email, password }: any) =>
  (dispatch: Function) => {
    dispatch({
      type: USER_LOADING,
    });
    axios
      .post('auth/register', {
        name,
        email,
        password,
      })
      .then((res) => {
        dispatch(clearErrors());
        dispatch(closeMenu());
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
          type: REGISTER_FAILED,
        });
      });
  };

export const logout = () => (dispatch: Function) => {
  dispatch({
    type: USER_LOADING,
  });
  axios
    .post('auth/logout')
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
