import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {
  colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
  getData,
} from '../../utils';
import {dummyMenu} from '../../data';
import {ListMenu} from '../../components';
import {DefaultImage} from '../../assets';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils/constant';

export default class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profil: false,
      menus: dummyMenu,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;

      if (data) {
        this.setState({
          profil: data,
        });
      } else {
        this.props.navigation.replace('Masuk');
      }
    });
  };

  render() {
    const {profil, menus} = this.state;
    // console.log(" Profile: ", profil);
    return (
     
        <View style={styles.page}>
          <View style={styles.container}>
            <Image
              source={profil.avatar ? {uri: profil.avatar} : DefaultImage}
              style={styles.foto}></Image>
            <View style={styles.profil}>
              <Text style={styles.nama}>{profil.nama}</Text>
              <Text style={styles.desc}>No. HP : {profil.nohp}</Text>
              <Text style={styles.desc}>E-mail : {profil.email}</Text>
            </View>
            <ListMenu menus={menus} navigation={this.props.navigation} />
          </View>
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(620),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  foto: {
    width: responsiveWidth(180),
    height: responsiveHeight(200),
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: -responsiveWidth(65),
  },

  profil: {
    marginTop: 10,
    alignItems: 'center',
  },

  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI),
    color: colors.black,
  },

  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
    color: colors.black,
  },
});
