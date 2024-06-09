import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Header() {
 

  return (
    <View style={styles.head}>
      <View style={styles.menu}>

      <LinearGradient  colors={['#FFB302', '#FF990E', '#FF8519', '#FF7C2B', '#ED4924']} 

       style={styles.entre}>
     
        <Image source={require('../src/images/LogoDeitada.png')} style={styles.imageHeader}/>
     

      </LinearGradient>

        
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingTop: 0,
    zIndex: 1,
    width: '100%', 
    height: 90,
  },

  entre:{
    width: '100%',
    height:"100%",
  
  },
  imageHeader:{
    width:'53%',
    height: 55,
    marginTop: 35,

  }
 

});
