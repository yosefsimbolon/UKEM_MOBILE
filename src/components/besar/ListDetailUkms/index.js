import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardDetailUkms} from '../../kecil';
import {connect} from 'react-redux';
import {colors} from '../../../utils';

const ListDetailUkms = ({
  getListDetailUkmLoading,
  getListDetailUkmResult,
  getListDetailUkmError,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {getListDetailUkmResult ? (
        Object.keys(getListDetailUkmResult).map(key => {
          return (
            <CardDetailUkms
              key={key}
              detailUkms={getListDetailUkmResult[key]}
              navigation={navigation}
            />
          );
        })
      ) : getListDetailUkmLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator color={colors.primary} />
        </View>
      ) : getListDetailUkmError ? (
        <Text>{getListDetailUkmError}</Text>
      ) : (
        <Text>Data Kosong</Text>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  getListDetailUkmLoading: state.DetailUkmReducer.getListDetailUkmLoading,
  getListDetailUkmResult: state.DetailUkmReducer.getListDetailUkmResult,
  getListDetailUkmError: state.DetailUkmReducer.getListDetailUkmError,
});

export default connect(mapStateToProps, null)(ListDetailUkms);

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
    marginBottom: 30,
  },
});
