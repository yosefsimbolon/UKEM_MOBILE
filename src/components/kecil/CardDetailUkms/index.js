import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {colors, fonts, responsiveWidth} from '../../../utils';
import Tombol from '../Tombol';

const CardDetailUkms = ({detailUkms, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.jrkCard}>
        <View style={styles.card}>
          <Text style={styles.text}>{detailUkms.judul}</Text>
          <Image source={{uri: detailUkms.gambar[0]}} style={styles.gambar} />
        </View>
        <View style={styles.btnDetail}>
          <Tombol
            type="text"
            padding={7}
            title="Detail"
            onPress={() => navigation.navigate('UkmDetail', {detailUkms})}
          /> 
        </View>
      </View>
    </View>
  );
};

export default CardDetailUkms;

const styles = StyleSheet.create({
  gambar: {
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontFamily: fonts.primary.bold,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 5,
  },

  card: {
    backgroundColor: colors.white,
    width: 136,
    height: 140,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  btnDetail: {
    marginTop: -20,
  },
  jrkCard: {
    marginBottom: 25,
  },
});
