import {TouchableOpacity, Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import colors from '@colors';
import { useNavigation } from '@react-navigation/native';


const logo = require("@images/N2Mobile.jpg");
const map = require("@images/map.png");
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View 
      style={styles.upContainer}>
        <Image source={logo} style={styles.logo} resizeMode={'contain'} />
        <Text style={styles.title}>N2Mobile</Text>
      </View>
      <View style={styles.downContainer}>
        <Text style={styles.mapText}>MAP</Text>
        <Image source={map} style={styles.map} resizeMode={'contain'} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7030A0',
    flexDirection: 'column',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5%',
  },
  upContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: colors.purple,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-4%',
    top: '4%',
  },
  logo: {
    borderRadius: Math.round(windowWidth + windowHeight) / 2,
    width: windowWidth * 0.12,
    height: windowWidth * 0.12,
  },
  map: {
    width: windowWidth * 0.05,
    height: windowWidth * 0.05,
  },
  mapText: {
    color: colors.black,
    fontWeight: 'bold',
    margin: '1%'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 25,
    margin: '2%'
  },


})