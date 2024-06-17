import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
//imports components
import Header from './src/components/Header';
import InputPesquisa from './src/components/InputPesquisa';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; 
  }
  return (
    <View style={styles.container}>
     
      <Header />
      <ScrollView>
      <Text style={styles.textInicial}>Bem Vindo(a), <Text style={styles.nomeStyle}>Sabrina!</Text></Text>
      <InputPesquisa />
      <Image source={require('./src/images/freteGratis.png')} style={styles.freteImage}/>
    
      <StatusBar style="light" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins_400Regular', // Ou Poppins_700Bold para negrito
    fontSize: 24,
    fontWeight: 'normal',
    position: 'relative',
  },
  imagePrinc:{
    width: "100%",
    height: 500,
    resizeMode: 'cover',
    
  },
  entre:{
    width: '100%',
    height: 10,
  },
  textInicial:{
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginLeft: '8%',
    marginTop: '4%'
  },
  nomeStyle:{
    color:'#FF7A2F'
  },
  freteImage:{
    width: '99.99%',
    marginTop: '3%'
  
  }
});
