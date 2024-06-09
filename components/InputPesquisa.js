import React from "react";
import {  StyleSheet, Text, TextInput, View, Image  } from 'react-native'

export default function InputPesquisa(){
    return(
        <View style={styles.containerPesquisa}>
        <View style={styles.inputBorderPesquisa}>
            <TextInput 
            placeholder="O que você está procurando hoje?"
            style={styles.inputdaPesquisa}
            />
            <Image source={require('../src/images/pesquisarIcon.png')} style={styles.pesquisarIcon}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    containerPesquisa:{
        alignItems:'center'
    },
    inputBorderPesquisa:{
        alignContent: 'center',
        alignItems:    'center',
        marginTop: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: '#FF7A2F',
        borderWidth: 1,
        borderRadius: 18, // Define os cantos arredondados
        paddingHorizontal: 10,
        width: '85%',
        paddingLeft: '5%'
    },
 
    pesquisarIcon:{
        width: 17,
        height: 17,
        marginLeft: '17%'
     
    }
})