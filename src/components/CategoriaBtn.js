import React from "react";
import {  View, Image, Text  } from 'react-native';


export default function CategoriaBtn({imgCategoria, nomeCategoria}){
    return(
        <View style={styles.containerCategoriaImg}>
            <Image source={imgCategoria} />
            <Text>{nomeCategoria}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    containerCategoriaImg:{
        
    }
})