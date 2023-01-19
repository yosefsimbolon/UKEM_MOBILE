import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import {colors, fonts, responsiveHeight} from '../../utils';
import {IlustrasiPendaftaran} from '../../assets';
import {Jarak, Inputan, Tombol} from '../../components';
import {registerUser} from '../../action/AuthAction';
import FIREBASE from '../../config/FIREBASE';
import {connect} from 'react-redux';

class Pendaftaran extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: '',
      email: '',
      nohp: '',
      password: '',
    };
  }

 
  componentDidUpdate(prevProps) {
    const {registerResult} = this.props;

    if (registerResult && prevProps.registerResult !== registerResult) {
      this.props.navigation.replace('MainApp');
    }
  }
  onContinue = () => {
    const {nama, email, nohp, password} = this.state;
    if (nama && email && nohp && password) {
      // const dataRefrensi = FIREBASE.database().ref('data')
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: 'user',
      };
      // dataRefrensi.push(data).then((data) => {
      //   // Alert.alert("Sukses", "Data Anda sudah tersimpan")
      //   // this.props.navigation.replace('Beranda')

      //ke auth action
      this.props.dispatch(registerUser(data, password));
    } else {
      Alert.alert(
        'Kesalahan',
        'Nama, E-mail, No. Handphone, dan Password harus diisi',
      );
    }
  };

  render() {
    const {nama, email, nohp, password} = this.state;
    const {registerLoading} = this.props
    
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.btnBack}>
              <Tombol
                icon="arrowLeft"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
            <View style={styles.ilustrasi}>
              <IlustrasiPendaftaran />
              <Jarak height={10} />
              <Text style={styles.title}>Daftar</Text>
              <Text style={styles.title}>Isi Daftar Diri Anda</Text>
            </View>

            <View style={styles.card}>
              <Inputan
                label="Nama"
                value={nama}
                onChangeText={nama => this.setState({nama})}
              />
              <Inputan
                label="E-mail"
                value={email}
                onChangeText={email => this.setState({email})}
              />
              <Inputan
                label="No.Handphone"
                keyboardType="number-pad"
                value={nohp}
                onChangeText={nohp => this.setState({nohp})}
              />
              <Inputan
                label="Password"
                secureTextEntry
                value={password}
                onChangeText={password => this.setState({password})}
              />
              <Jarak height={30} />
              <Tombol
                title="Melanjutkan"
                type="textIcon"
                icon="submit"
                padding={10}
                fontSize={18}
                onPress={() => this.onContinue()}
                loading={registerLoading}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  registerLoading: state.AuthReducer.registerLoading,
  registerResult: state.AuthReducer.registerResult,
  registerError: state.AuthReducer.registerError,
});

export default connect(mapStateToProps, null)(Pendaftaran);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    alignItems: 'center',
    marginTop: responsiveHeight(50),
    marginLeft: 43,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 5,

    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 10,
    marginTop: 30,
  },
  btnBack: {
    marginLeft: 30,
    marginTop: responsiveHeight(50),
    position: 'absolute',
  },
 
});
