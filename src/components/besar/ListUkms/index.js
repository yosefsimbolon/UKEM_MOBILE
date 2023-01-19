import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CardUkms} from '../../kecil';
import { connect } from 'react-redux';
import { colors } from '../../../utils';

const ListUkms = ({getListUkmLoading, getListUkmResult, getListUkmError, navigation}) => {
  return (
    <View style={styles.container}>
      {getListUkmResult ? (
        Object.keys(getListUkmResult).map((key) => {
          return (
            <CardUkms
              key={key}
              ukm={getListUkmResult[key]}
              navigation={navigation}
            />
          );
        })
      ) : getListUkmLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListUkmError ? (
        <Text>{getListUkmError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({ 
  getListUkmLoading: state.UkmReducer.getListUkmLoading,
  getListUkmResult: state.UkmReducer.getListUkmResult,
  getListUkmError: state.UkmReducer.getListUkmError
});

export default connect(mapStateToProps, null)(ListUkms);



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  loading: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30
  }
});
