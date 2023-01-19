import {combineReducers} from 'redux';
import AuthReducer from './auth';
import ProfilReducer from './profil';
import UkmReducer from './ukm';
import DetailUkmReducer from './detailukm';

const rootReducer = combineReducers({
  AuthReducer,
  ProfilReducer,
  UkmReducer,
  DetailUkmReducer
});

export default rootReducer;
