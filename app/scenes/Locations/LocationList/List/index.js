import { SafeAreaView, StyleSheet, ScrollView, Text, View, FlatList } from 'react-native'
import React from 'react';
import Card from '../Card';
import colors from '@colors';

const renderItem = ({ item }) => {
  return (
    <Card item={item} />
  )
};

export default function Index({locationData}) {
  return (
    <FlatList
      data={locationData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: '2%',
    flex: 1
  },
})