import FIREBASE from '../config/FIREBASE';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const GET_LIST_DETAILUKM = 'GET_LIST_DETAILUKM';
// export const GET_LIST_JERSEY_BY_LIGA = 'GET_LIST_JERSEY_BY_LIGA';
// export const DELETE_PARAMETER_JERSEY = 'DELETE_PARAMETER_JERSEY';
// export const SAVE_KEYWORD_JERSEY = "SAVE_KEYWORD_JERSEY";

export const getListDetailUkm = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_DETAILUKM);

    // if(idLiga) {
    FIREBASE.database()
      .ref('detailukms')
      // .orderByChild('liga')
      // .equalTo(idLiga)
      .once('value', querySnapshot => {
        //Hasil
        // console.log("Data : ", querySnapshot.val());
        let data = querySnapshot.val() 

        dispatchSuccess(dispatch, GET_LIST_DETAILUKM, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_DETAILUKM, error);
        alert(error);
      });
  };

};

export const limitUkm = () => {
  return dispatch => {
    dispatchLoading(dispatch, GET_LIST_DETAILUKM);

    FIREBASE.database()
      .ref('detailukms')
      .limitToLast(6)
      .once('value', querySnapshot => {
        //Hasil
        let data = querySnapshot.val();

        dispatchSuccess(dispatch, GET_LIST_DETAILUKM, data);
      })
      .catch(error => {
        dispatchError(dispatch, GET_LIST_DETAILUKM, error);
        alert(error);
      });
  };
};

// export const getJerseyByLiga = (id, namaLiga) => ({
//   type: GET_LIST_JERSEY_BY_LIGA,
//   payload: {
//     idLiga: id,
//     namaLiga: namaLiga
//   }
// })

// export const deleteParameterJersey = () => ({
//   type: DELETE_PARAMETER_JERSEY,
// })

// export const saveKeywordJersey = (search) => ({
//     type: SAVE_KEYWORD_JERSEY,
//     payload: {
//       data: search
//     }
// })
