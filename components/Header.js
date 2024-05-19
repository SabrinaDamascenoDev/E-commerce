import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Platform, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.head}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={toggleMenu}>
          <Ionicons name={menuOpen ? 'close' : 'menu'} size={32} color="black" />
        </TouchableOpacity>

        {menuOpen && (
          <View style={styles.menuItens}>
            <Text style={styles.menuItem}>Início</Text>
            <Text style={styles.menuItem}>Catálogo</Text>
            <Text style={styles.menuItem}>Entrar em contato</Text>
            <Text style={styles.menuItem}>Item do menu 4</Text>
          </View>
        )}

        <Image
          source={{ uri: 'https://6cdec4-37.myshopify.com/cdn/shop/files/Copia_de_Total_Markt_20240513_225238_0000-removebg-preview_215x@2x.png?v=1715652277' }}
          style={styles.image}
        />

        <View style={styles.iconsCima}>
          <TouchableOpacity>
            <Ionicons name="cart" size={29} color="rgb(255, 215, 0)" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="person-sharp" size={29} color="rgb(255, 215, 0)" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons name="truck" size={29} color="rgb(255, 215, 0)" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="O que está buscando?"
          style={styles.inputHearder}
          placeholderTextColor="gray"
        />
        <Ionicons name="search" size={24} color="black" style={styles.iconStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    paddingTop: 60,
    paddingLeft: 15,
    zIndex: 1,
  },
  searchContainer: {
    position: 'relative',
    width: '95%',
    marginBottom: 10,
    zIndex:-1,

  },
  inputHearder: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 25,
    fontSize: 16,
    zIndex: -1,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        zIndex: -1,
      },
      android: {
        elevation: 5,
        fontSize: 10,
      },
    }),
  },
  iconStyle: {
    position: 'absolute',
    right: 15,
    top: 8,
    color: 'rgb(255, 215, 0)',
  },
  iconsCima: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginLeft: '11%',
  },
  image: {
    width: 140,
    height: 45,
    resizeMode: 'cover',
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  menuItens: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    position: 'absolute',
    top: 5,
    backgroundColor: 'white',
    width: '95%',
    height: 700,
    marginTop: 60,
    marginLeft: 0,
    paddingLeft: 0,
    left: 0,
  },
  menuItem: {
    zIndex: 90000,
    paddingTop: 30,
    paddingLeft: 30,
    fontSize: 16,
    color: 'gray',
  },
});
