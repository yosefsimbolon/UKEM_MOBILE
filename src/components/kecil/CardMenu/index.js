import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {PanahKanan} from '../../../assets';
import {clearStorage, colors, fonts, responsiveHeight} from '../../../utils';
import FIREBASE from '../../../config/FIREBASE'

const CardMenu = ({menu, navigation}) => {

  const onSubmit = () => {
    if(menu.halaman === "Masuk") {
      FIREBASE.auth().signOut().then(() => {
        // Sign-out successful.

        clearStorage()
        navigation.replace('Masuk')
      }).catch((error) => {
        // An error happened.
        
        alert(error)
      });
    }else {
      navigation.navigate(menu.halaman)
    }
  }


  return (
    <TouchableOpacity style={styles.container}onPress={() => onSubmit ()}>
      <View style={styles.menu}>
        {menu.gambar}
        <Text style={styles.text}>{menu.nama}</Text>
      </View>
      <PanahKanan />
    </TouchableOpacity>
  );
}; 

export default CardMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    padding: responsiveHeight(20),
    borderRadius: 10,
    alignItems: 'center'
  },

  text: {
    fontFamily: fonts.primary.bold,
    fontSize: 16,
    color: colors.black,
    marginLeft: 20
  },

  menu: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
