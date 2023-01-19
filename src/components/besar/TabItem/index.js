import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  Beranda,
  BerandaPasif,
  Profile,
  ProfilePasif,
  SemuaUKM,
  SemuaUKMPasif,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label == 'Beranda') {
      return isFocused ? <Beranda /> : <BerandaPasif />;
    }

    if (label == 'Semua Ukm') {
      return isFocused ? <SemuaUKM /> : <SemuaUKMPasif />;
    }

    if (label == 'Profil') {
      return isFocused ? <Profile /> : <ProfilePasif />;
    }
    return <SemuaUKMPasif />;
  };
 
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.Text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  Text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    fontFamily: fonts.primary.bold,
    marginTop: 4,
  }),
});
