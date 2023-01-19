import {GET_LIST_UKM} from '../../action/UkmAction';

const initialState = {
  getListUkmLoading: false,
  getListUkmResult: false,
  getListUkmError: false,

  changePasswordLoading: false,
  changePasswordResult: false,
  changePasswordError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_UKM:
      return {
        ...state,
        getListUkmLoading: action.payload.loading, 
        getListUkmResult: action.payload.data,
        getListUkmError: action.payload.errorMessage,
      };

    // case CHANGE_PASSWORD:
    //   return {
    //     ...state,
    //     changePasswordLoading: action.payload.loading,
    //     changePasswordResult: action.payload.data,
    //     changePasswordError: action.payload.errorMessage,
    //   };
    default:
      return state;
  }
}
