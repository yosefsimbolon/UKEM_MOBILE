import {UPDATE_PROFIL, CHANGE_PASSWORD} from '../../action/ProfileAction';

const initialState = {
  updateProfilLoading: false,
  updateProfilResult: false,
  updateProfilError: false,

  changePasswordLoading: false,
  changePasswordResult: false,
  changePasswordError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFIL:
      return {
        ...state,
        updateProfilLoading: action.payload.loading, 
        updateProfilResult: action.payload.data,
        updateProfilError: action.payload.errorMessage,
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        changePasswordLoading: action.payload.loading,
        changePasswordResult: action.payload.data,
        changePasswordError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
