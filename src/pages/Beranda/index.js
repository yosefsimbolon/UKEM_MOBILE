import {StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import React, {Component} from 'react';
import {HeaderComponent, Jarak, Tombol, ListDetailUkms} from '../../components';
import {colors, fonts} from '../../utils';
import {connect} from 'react-redux';
import {limitUkm} from '../../action/DetailUkmAction';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils/constant';

class Beranda extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(limitUkm());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent />
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar backgroundColor={colors.white} barStyle="dark-content" />

          <View style={styles.UKMS}>
            <View>
              <Text style={styles.label_1}> Tak kenal maka tak sayang</Text>
              <Text style={styles.label_1}>
                {' '}
                Yuk kenalan sama
                <Text style={styles.boldLabel}> UKM Unika St.Thomas</Text>
              </Text>
            </View>
            <ListDetailUkms navigation={navigation} />
            <Tombol
            type="text"
            padding={7}
            title="Lihat Semua"
            onPress={() => navigation.navigate('SemuaUkm')}
          /> 
          </View>
          <Jarak height={120} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(Beranda);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},

  label_1: {
    fontSize: RFValue(20, heightMobileUI),
    fontFamily: fonts.primary.regular,
  },

  UKMS: {
    marginHorizontal: 30,
    marginTop: 10,
  },

  boldLabel: {
    fontSize: RFValue(20, heightMobileUI),
    fontFamily: fonts.primary.bold,
  },
});
