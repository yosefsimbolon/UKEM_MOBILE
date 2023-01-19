import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  colors,
  fonts,
  heightMobileUI,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {Tombol} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import {dummyRincianMenu} from '../../data';
import {ProfilRincian} from '../../assets';

export default class UkmDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ukm: this.props.route.params.detailUkms,
      images: this.props.route.params.detailUkms.gambar,
      rincianmenus: dummyRincianMenu,
    };
  }

  render() {
    const {navigation} = this.props;

    // console.log("Parameter: ", this.props.route.params);
    const {ukm, images} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.button}>
          <Tombol
            icon="arrowLeft"
            padding={7}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.set}>
          <View style={styles.frame} />
          <Image style={styles.ukmLogo} source={{uri: images[0]}} />
        </View>
        <Text style={styles.nama}>{ukm.nama}</Text>

        <View style={styles.btnprofil}>
          <Tombol
            type="textsatu"
            padding={responsiveHeight(20)}
            title="Profil"
            onPress={() => navigation.navigate('ProfilRincianUkm', {ukm})}
          />
        </View>
        <View style={styles.btnaktivitas}>
          <Tombol
            type="textsatu"
            padding={responsiveHeight(20)}
            title="Aktivitas"
            onPress={() => navigation.navigate('AktivitasRincianUkm', {ukm})}
          />
        </View>
        <View style={styles.btnprestasi}>
          <Tombol
            type="textsatu"
            padding={responsiveHeight(20)}
            title="Prestasi"
            onPress={() => navigation.navigate('PrestasiRincianUkm', {ukm})}
          />
        </View>
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
  ukmLogo: {
    width: responsiveWidth(160),
    height: responsiveHeight(210),
    alignSelf: 'center',
    marginTop: -170,
  },
  frame: {
    backgroundColor: colors.white,
    width: 200,
    height: 190,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    alignSelf: 'center',
    marginTop: -60,
    borderRadius: 10,
  },
  set: {
    marginTop: 140,
    marginBottom: 30,
  },
  nama: {
    fontSize: RFValue(24, heightMobileUI),
    fontFamily: fonts.primary.bold,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 10,
  },

  btnprofil: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  btnaktivitas: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  btnprestasi: {
    marginTop: 10,
    marginHorizontal: 30,
  },
});
