import React from 'react'
import { StyleSheet, Text, TouchableOpacity,  } from 'react-native'
import { colors, fonts } from '../../../utils/'


const TextOnly = ({padding, title, onPress, fontSize}) => {

    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Text style={styles.text(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextOnly

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.primary,
        padding: padding,
        borderRadius: 6
    }),
    text: (fontSize) => ({
        color: colors.white,
        textAlign: 'center',
        fontSize: fontSize ? fontSize : 14,
        fontFamily: fonts.primary.bold
    })
})
