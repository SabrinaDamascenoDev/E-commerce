import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Cards from './Cards';

export default function TodosCard() {

  return (
    <View style={styles.cardTodos}>
      <ScrollView horizontal={true} style={styles.horizontalScrollView} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={styles.scrollItem}>
              <Cards imageSource={require('../src/images/headphone.png')} imageName={"Eletronicos"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.scrollItem}>
              <Cards imageSource={require('../src/images/headphone.png')} imageName={"Eletronicos"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.scrollItem}>
              <Cards imageSource={{uri: 'https://6cdec4-37.myshopify.com/cdn/shop/collections/Design_sem_nome_2_300x.png?v=1715467358'}} imageName={"Eletronicos"} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.scrollItem}>
              <Cards imageSource={require('../src/images/headphone.png')} imageName={"Eletronicos"} />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  cardTodos: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    zIndex: -1,
  },
  horizontalScrollView: {
    paddingHorizontal: 10,
  },
  scrollItem: {
    marginHorizontal: 10,  
    justifyContent: 'center',
    alignItems: 'center',
  },
});
