import { CLEAR_ERRORS, GET_ERRORS } from '../types';

export const returnErrors = (msg: any, status: number, id: any = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

// CLEAR ERRORS
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
