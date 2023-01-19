import React, {Component} from 'react';
import {Text, StyleSheet, View, Linking} from 'react-native';
import {colors, fonts, responsiveWidth, getData} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils/constant';
import {Tombol} from '../../components';
import FIREBASE from '../../config/FIREBASE';

export default class ProfilRincianUkm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataRincianUkm: this.props.route.params.ukm,
    };
  }
  render() {
    const {navigation} = this.props;
    const {dataRincianUkm} = this.state;
    return (
      <View style={styles.page}>
        <Text style={styles.jenis}>{dataRincianUkm.jenis}</Text>
        <View style={styles.button}>
          <Tombol
            icon="arrowLeft"
            padding={7}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.ket}>{dataRincianUkm.ket}</Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(dataRincianUkm.link)}>
          Klik untuk  mendaftar
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    position: 'absolute',
    margin: 30,
  },
  jenis: {
    marginLeft: 100,
    marginTop: 37,
    fontFamily: fonts.primary.medium,
    fontSize: RFValue(22, heightMobileUI),
    color: colors.black,
  },
  ket: {
    marginTop: 40,
    marginHorizontal: 30,
    textAlign: 'left',
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(22, heightMobileUI),
    color: colors.black,
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI),
    color: colors.black,
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
  },
  link: {
    fontStyle: 'italic',
    color: 'blue',
    marginTop: 30,
    marginHorizontal: 30
  }
});
