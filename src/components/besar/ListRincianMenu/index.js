import {View} from 'react-native';
import React from 'react';
import {CardRincianMenu} from '../../kecil';

const ListRincianMenu = ({rincianmenus, navigation}) => {
  return (
    <View>
      {rincianmenus.map(rincianmenu => {
        return (
          <CardRincianMenu
            rincianmenu={rincianmenu}
            key={rincianmenu.id}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

export default ListRincianMenu;