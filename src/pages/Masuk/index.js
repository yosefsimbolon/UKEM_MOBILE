import {StyleSheet, View, Text, Alert} from 'react-native';
import React, {Component} from 'react';
import {Judul} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, responsiveHeight} from '../../utils';
import {loginUser} from '../../action/AuthAction';
import {connect} from 'react-redux';

class Masuk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  login = () => {
    const {email, password} = this.state;

    if (email && password) {
      //action
      this.props.dispatch(loginUser(email, password));
    } else {
      Alert.alert('Kesalahan', 'E-mail dan Password harus diisi');
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;

    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const {email, password} = this.state;
    const {loginLoading} = this.props;
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Judul />
        </View>
        <View style={styles.cardLogin}>
          <Inputan
            label="E-mail"
            value={email}
            onChangeText={email => this.setState({email})}
          />
          <Inputan
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <Jarak height={25} />
          <Tombol
            title="Masuk"
            type="text"
            padding={12}
            fontSize={18}
            loading={loginLoading} onPress={() => this.login()}
          />
        </View>
        <View style={styles.register}>
          <Text style={styles.txt}>Belum Punya Akun ?</Text>
          <Text
            style={styles.txt}
            onPress={() => this.props.navigation.navigate('Pendaftaran')}>
            Klik Untuk Daftar
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});
export default connect(mapStateToProps, null)(Masuk);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    top: -35,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: -55,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(200),
  },
  cardLogin: {
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

    padding: 30,
    borderRadius: 10,
    marginTop: 50,
  },
  register: {
    alignItems: 'center',
    marginTop: 20,
  },
  txt: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
    color: colors.black,
  },
});
