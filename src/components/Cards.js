import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Cards({ imageSource, imageName }) {

  return (
    <View style={styles.card}>
      <View style={styles.backImage}>
      <Image
      source={imageSource} 
      style={styles.imageCard}
      ></Image>
      </View>
      <Text style={styles.textCard}>{imageName}</Text>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  imageCard: {
    backgroundColor:'rgb(255, 215, 0)',
    borderRadius: 100,
    width: 140,
    height: 140,
  
  },
  textCard: {
    color: 'gray',
    fontSize: 12,
  },
});
