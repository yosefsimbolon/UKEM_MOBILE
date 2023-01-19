import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, Alert} from 'react-native';
import {
  colors,
  fonts,
  getData,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {Inputan, Tombol} from '../../components';
import {connect} from 'react-redux';
import {DefaultImage} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import { updateProfil } from '../../action/ProfileAction'

class EditProfil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: '',
      nama: '',
      email: '',
      nohp: '',
      avatar: false,
      avatarForDB: '',
      avatarLama: '',
      updateAvatar: false,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps) {
    const { updateProfilResult } = this.props

    if(updateProfilResult && prevProps.updateProfilResult !== updateProfilResult) {
      Alert.alert("Sukses", "Update Profil Sukses");
      this.props.navigation.replace("MainApp")
    }

  }

  getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      this.setState({
        uid: data.uid,
        nama: data.nama,
        email: data.email,
        nohp: data.nohp,
        avatar: data.avatar,
        avatarLama: data.avatar
      });

    });
  };

  getImage = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 500, maxHeight: 500, includeBase64: true, selectionLimit: 1, cameraType: 'front'},
      (response) => {
        if (response.didCancel || response.errorCode || response.errorMessage) {
          Alert.alert('Kesalahan!', 'Maaf sepertinya anda tidak memilih fotonya');
        } else {
          const source = response.assets[0].uri;
          const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

          this.setState({
            avatar: source,
            avatarForDB: fileString,
            updateAvatar: true
          });
        }
      },
    );
  };

  onSubmit = () => {
    const {
      nama,
      nohp,
    } = this.state;
    if(nama && nohp) {
      //dispatch update
      this.props.dispatch(updateProfil(this.state))

    }else {
      Alert.alert("Kesalahan!", "Nama, No. Handphone, harus diisi")
    }
  }

  render() {
    const {
      nama,
      email,
      nohp,
      avatar,
    } = this.state;

    const {updateProfilLoading} = this.props;

    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan
            label="Nama"
            value={nama}
            onChangeText={(nama) => this.setState({nama})}
          />
          <Inputan label="Email" value={email} disabled />
          <Inputan
            label="No. Handphone"
            value={nohp}
            onChangeText={(nohp) => this.setState({nohp})}
            keyboardType="number-pad"
          />


          <View style={styles.inputFoto}>
            <Text style={styles.label}>Foto Profile :</Text>

            <View style={styles.wrapperUpload}>
              <Image
                source={
                  avatar
                    ? {uri: avatar}
                    : DefaultImage
                }
                style={styles.foto} 
              />

              <View style={styles.tombolChangePhoto}>
                <Tombol
                  title="Ubah Foto"
                  type="text"
                  padding={7}
                  onPress={() => this.getImage()}
                />
              </View>
            </View>
          </View>

          <View style={styles.submit}>
            <Tombol
              loading={updateProfilLoading}
              title="Kirimkan"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(15)}
              fontSize={18}
              onPress={() => this.onSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

  updateProfilLoading: state.ProfilReducer.updateProfilLoading,
  updateProfilResult: state.ProfilReducer.updateProfilResult,
  updateProfilrror: state.ProfilReducer.updateProfilError,
});

export default connect(mapStateToProps, null)(EditProfil);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  foto: {
    width: responsiveWidth(180),
    height: responsiveHeight(200),
    borderRadius: 10,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});