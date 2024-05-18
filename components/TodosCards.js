import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cards from './Cards';

export default function TodosCard() {

  return (
    <View style={styles.cardTodos}>
      <Cards imageSource={require('../src/images/headphone.png')} imageName={"Eletronicos"}/>
      <Cards imageSource={require('../src/images/headphone.png')} imageName={"Eletronicos"}/>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
 
});
