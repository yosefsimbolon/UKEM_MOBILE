import {GET_LIST_DETAILUKM, CHANGE_PASSWORD} from '../../action/DetailUkmAction';

const initialState = {
  getListDetailUkmLoading: false,
  getListDetailUkmResult: false,
  getListDetailUkmError: false,

  changePasswordLoading: false,
  changePasswordResult: false,
  changePasswordError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_DETAILUKM:
      return {
        ...state,
        getListDetailUkmLoading: action.payload.loading, 
        getListDetailUkmResult: action.payload.data,
        getListDetailUkmError: action.payload.errorMessage,
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
