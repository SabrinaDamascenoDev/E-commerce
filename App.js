import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import TodosCard from './components/TodosCards';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Header from './components/Header';
import { LinearGradient } from 'expo-linear-gradient';

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
      <ScrollView>
      <Header />
      <LinearGradient  colors={['#FFD700', '#FFA500', '#FF6347']} 
       start={{ x: 0, y: 0.5 }}
       end={{ x: 1, y: 0.5 }}
      style={styles.entre}>
     
      </LinearGradient>
      <Image
          source={{ uri: 'https://6cdec4-37.myshopify.com/cdn/shop/files/banner_loja_cll_600x.webp?v=1715464687%20600w,%20//6cdec4-37.myshopify.com/cdn/shop/files/banner_loja_cll_700x.webp?v=1715464687%20700w' }}
          style={styles.imagePrinc}
        />
        <TodosCard />
      <StatusBar style="auto" />
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
    
  }
});
