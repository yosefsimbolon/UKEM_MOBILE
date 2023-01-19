import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {colors, fonts, responsiveHeight, getData} from '../../../utils';
import {Jarak} from '../../kecil';
// import {DefaultImage} from '../../assets';

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profil: false,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;

      if (data) {
        this.setState({
          profil: data,
        });
      }
    });
  };

  render() {
    const {navigation, profil} = this.state;
  
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* Input Pencarian  */}

          <View style={styles.searchSection}>
            {/* <IconCari /> */}
            <View style={styles.inputs}>
              <Text style={styles.halo}> Selamat Datang,</Text>
              <Text style={styles.nama}>{profil.nama}</Text>
            </View>
          </View>
          <Jarak width={10} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(120),
    marginBottom: 30,
  },

  inputs: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 30,
  },
  halo: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
    color: colors.light,
  },
  nama: {
    fontSize: 20,
    fontFamily: fonts.primary.bold,
    color: colors.white,
  },
  foto: {
    width: 180,
    height: 200,
    borderRadius: 10,
  }
});
