import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ListDetailUkms} from '../../components';
import {colors, fonts} from '../../utils';
import {Jarak} from '../../components';
import {connect} from 'react-redux';
import {getListDetailUkm} from '../../action/DetailUkmAction';

class SemuaUkm extends Component {
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getListDetailUkm());
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.pilihUkm}>
            <Text style={styles.label}>
              Lihat <Text style={styles.boldLabel}>UKM</Text> Yang Anda Inginkan
            </Text>
            <ListDetailUkms navigation={navigation} />
          </View>

          <Jarak height={100} />
        </ScrollView>
      </View>
    );
  }
}

export default connect()(SemuaUkm);

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  container: {
    marginTop: 20,
  },
  pilihUkm: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
  view: {
    marginTop: 20,
  },
});
