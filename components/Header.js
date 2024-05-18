import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {

  return ( 
    <View style={styles.head}>
        <TextInput placeholder='O que está buscando?' style={styles.inputHearder} placeholderTextColor={"gray"}>
            
        </TextInput>
        <Ionicons name="search" size={24} color="black" style={styles.iconStyle} />
        
    </View>

  );
}

const styles = StyleSheet.create({
    head:{
        paddingTop: 140,
        paddingLeft: 15,
    },
    inputHearder:{
        width: 340,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        paddingLeft: 25,
        color: 'gray',
        fontSize: 16,
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            color: 'gray'
          },
          android: {
            elevation: 5,
          },
        }),
    
    },
    iconStyle:{
        position: 'relative',
        marginLeft: 290,
        bottom: 32,
        color: 'rgb(255, 215, 0)',
        fontWeight: 800,


    }
})