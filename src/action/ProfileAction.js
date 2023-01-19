// import {Alert} from 'react-native';
import FIREBASE from '../config/FIREBASE';
import {storeData} from '../utils';
import {dispatchError, dispatchLoading, dispatchSuccess} from '../utils';

export const UPDATE_PROFIL = 'UPDATE_PROFIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const updateProfil = (data) => {
  return (dispatch) => {
    // LOADING
    dispatchLoading(dispatch, UPDATE_PROFIL);

    const dataBaru = {
      uid: data.uid,
      nama: data.nama,
      email: data.email,
      nohp: data.nohp,
      status: 'user',
      avatar: data.updateAvatar ? data.avatarForDB : data.avatarLama,
    };

    FIREBASE.database()
      .ref('users/' + dataBaru.uid)
      .update(dataBaru)
      .then((response) => {
        //SUKSES
        dispatchSuccess(dispatch, UPDATE_PROFIL, response ? response : []);

        //Local Storage (Async Storage)
        storeData('user', dataBaru);
      })
      .catch((error) => {
        // ERROR
        dispatchError(dispatch, UPDATE_PROFIL, error.message);

        alert(error.message);
      });
  };
};

export const changePassword = (data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, CHANGE_PASSWORD);

    //Cek dulu apakah benar email & password lama (login)
    FIREBASE.auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((response) => {
        //jika sukses maka update password
        var user = FIREBASE.auth().currentUser;

        user
          .updatePassword(data.newPassword)
          .then(function () {
            // Update successful.

            dispatchSuccess(dispatch, CHANGE_PASSWORD, 'Sukses Ganti Password');
            
          })
          .catch(function (error) {
            // An error happened.
            // ERROR
            dispatchError(dispatch, CHANGE_PASSWORD, error);

            alert(error);
          });
      })
      .catch((error) => {
        // ERROR
        dispatchError(dispatch, CHANGE_PASSWORD, error.message);

        alert(error.message);
      });
  };
};
