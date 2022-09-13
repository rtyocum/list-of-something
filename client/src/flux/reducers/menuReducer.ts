import { OPEN_LOGIN, OPEN_REGISTER } from "../types";

const initialState = {
  menu: null,
};

const menuReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case OPEN_LOGIN:
      return {
        menu: 'login',
      };

    case OPEN_REGISTER:
      return {
        menu: 'register',
      };

    case 'CLOSE_MENU':
        return {
            menu: null,
        };

    default:
      return state;
  }
};

export default menuReducer;
