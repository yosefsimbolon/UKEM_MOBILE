import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Beranda,
  Splash,
  SemuaUkm,
  Profil,
  UkmDetail,
  EditProfil,
  UbahPassword,
  Masuk,
  Pendaftaran,
  ProfilRincianUkm,
  AktivitasRincianUkm,
  PrestasiRincianUkm
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SemuaUkm"
        component={SemuaUkm}
        options={{title: 'Semua UKM', headerShown: false}}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UkmDetail"
        component={UkmDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfil"
        component={EditProfil}
        options={{title: 'Ubah Profil'}}
      />
      <Stack.Screen
        name="UbahPassword"
        component={UbahPassword}
        options={{title: 'Ubah Password'}}
      />
      <Stack.Screen 
      name="Masuk" 
      component={Masuk}
      options={{headerShown: false}} />

      <Stack.Screen
        name="Pendaftaran"
        component={Pendaftaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfilRincianUkm"
        component={ProfilRincianUkm}
        options={{title: 'Profil', headerShown: false}}
      />
       <Stack.Screen
        name="AktivitasRincianUkm"
        component={AktivitasRincianUkm}
        options={{title: 'Aktivitas', headerShown: false}}
      />
      <Stack.Screen
        name="PrestasiRincianUkm"
        component={PrestasiRincianUkm}
        options={{title: 'Prestasi', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
