import {Text, StyleSheet, View, TouchableOpacity,} from 'react-native';
import React, {Component} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {Photo} from '../../../assets';
import {fonts} from '../../../utils';

export default class ContentComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, margin: 20}}>
        <Photo />
        <Text
          style={{
            left: 68,
            top: -47,
            fontSize: 14,
            fontFamily: fonts.primary.regular,
            color: 'black',
          }}>
          Selamat Datang,
        </Text>
        <Text
          style={{
            left: 68,
            top: -47,
            fontSize: 14,
            fontFamily: fonts.primary.bold,
            color: 'black',
          }}>
          Yosefh Tumpuan Simbolon
        </Text>
        
        <FlatGrid
          style={{flex: 1}}
          itemDimension={130}
          spacing={14}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: '#f2f2f2',
                height: 175,
                borderRadius: 20,
                elevation: 3,
              }}>
              <Text></Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
});
