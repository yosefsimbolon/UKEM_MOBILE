import React from 'react'
import { StyleSheet, Text, TouchableOpacity,  } from 'react-native'
import { ProfilRincian, AktivitasRincian, PrestasiRincian  } from '../../../assets'
import { colors, fonts } from '../../../utils/'


const TextOnlySatu = ({padding, title, onPress, fontSize, icon}) => {
    const Icon = () => {
        if (icon === 'user') {
          return <ProfilRincian />;
        } else if (icon === 'activity') {
          return <AktivitasRincian />;
        } else if (icon === 'achievement') {
          return <PrestasiRincian />;
        }
        return <ProfilRincian />;
      };
    
    return (
        
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            {/* <Icon/> */}
            <Text style={styles.text(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextOnlySatu

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.white,
        padding: padding,
        borderRadius: 10,

        shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
        
    }),
    text: (fontSize) => ({
        color: colors.black,
        textAlign: 'center',
        fontSize: fontSize ? fontSize : 16,
        fontFamily: fonts.primary.bold
    }),
    iconProfil: {
        marginTop: -20
    }
})
