import { StyleSheet, View } from 'react-native'
import React from 'react'
import Map from './Map';
import Footer from './Footer';

export default function LocationDetail({ route }) {
  const { item, distance } = route.params;

  return (
    <View style={styles.page}>
      <Map item={item} />
      <Footer item={item} distance={distance} />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

})