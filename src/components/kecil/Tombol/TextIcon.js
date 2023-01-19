import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconKembali, FotoProfil, IconSubmit} from '../../../assets';
import {colors, fonts} from '../../../utils';
import Jarak from '../Jarak';

const TextIcon = ({icon, padding, onPress, title, fontSize}) => {
  const Icon = () => {
    if (icon === 'profil') {
      return <FotoProfil />;
    } else if (icon === 'arrowLeft') {
      return <IconKembali />;
    } else if (icon === 'submit') { 
      return <IconSubmit />;
    }
    return <FotoProfil />;
  };

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
      <Jarak width={5} />
      <Text style={styles.title(fontSize)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextIcon;

const styles = StyleSheet.create({
  container: (padding) => ({
    backgroundColor: colors.primary,
    padding: padding,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: (fontSize) => ({
    color: colors.white,
    fontSize: fontSize ? fontSize : 14,
    fontFamily: fonts.primary.bold,
  }),
});
