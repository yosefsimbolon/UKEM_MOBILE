import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {FotoProfil, IconKembali} from '../../../assets';
import {colors} from '../../../utils';
import TextOnly from './TextOnly';
import TextIcon from './TextIcon';
import TombolLoading from './TombolLoading';
import TextOnlySatu from './TextOnlySatu';

const Tombol = props => {
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
  const {icon, type, padding, onPress, loading} = props;

  //untuk loading
  if (loading) {
    return <TombolLoading {...props} />;
  }

  if (type === 'text') {
    return <TextOnly {...props} />;
  } else if (type === 'textsatu') {
    return <TextOnlySatu {...props} />;
  } else if (type === 'textIcon') {
    return <TextIcon {...props} />;
  }

  return (
    <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default Tombol;

const styles = StyleSheet.create({
  container: padding => ({
    backgroundColor: colors.white,
    padding: 5,
    borderRadius: 5,
    marginRight: 30,
  }),
});
