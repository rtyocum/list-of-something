import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import listReducer from './listReducer';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  list: listReducer,
  auth: authReducer,
  error: errorReducer,
  menu: menuReducer,
});

export default rootReducer;
