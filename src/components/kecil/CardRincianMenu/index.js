//cardRincianMenu
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';;
import {colors, fonts, responsiveHeight} from '../../../utils';


const CardRincianMenu = ({rincianmenu, navigation}) => {

    const onSubmit = () => {
        navigation.navigate(rincianmenu.halaman)
    }
  
  return (
    <TouchableOpacity style={styles.container}onPress={() => onSubmit ()}>
      <View style={styles.menu}>
        {rincianmenu.gambar}
        <Text style={styles.text}>{rincianmenu.nama}</Text>
      </View>
    </TouchableOpacity>
  );
}; 

export default CardRincianMenu;

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
