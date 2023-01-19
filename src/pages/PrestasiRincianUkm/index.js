import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { Tombol } from '../../components';
import { colors } from '../../utils';

export default class PrestasiRincianUkm extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.page}>
          <View style={styles.button}>
          <Tombol
            icon="arrowLeft"
            padding={7}
            onPress={() => navigation.goBack()}
          />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  button: {
    position: 'absolute',
    margin: 30,
  }
})