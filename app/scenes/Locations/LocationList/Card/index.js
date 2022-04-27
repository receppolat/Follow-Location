import { TouchableOpacity, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';

import { store } from '../../../../redux/store';
import { addFavorite, removeFavorite } from '../../../../redux/favorites/action';

import colors from '@colors';
import { useNavigation } from '@react-navigation/native';

import { lineString, length } from '@turf/turf';

const favTrue = require("@images/favorite.png");
const favFalse = require("@images/unFavorite.png");
const windowWidth = Dimensions.get('window').width;



export default function index({ item }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    setIsFavorite(store.getState().favorites.favoriteIds.indexOf(item.id) > -1);
    var line = lineString(item.coordinates);
    var distance = length(line);
    setDistance(distance);
  }, []);

  const setFavorite = (id) => {
    if (store.getState().favorites.favoriteIds.indexOf(id) > -1) {
      store.dispatch(removeFavorite(id));
      setIsFavorite(false);
    }
    else {
      store.dispatch(addFavorite(id));
      setIsFavorite(true);
    }
  }
  const navigation = useNavigation();
  const icon = isFavorite ? favTrue : favFalse;
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => setFavorite(item.id)}
        style={styles.leftContainer}>
        <Image source={icon} style={styles.fav} />
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'row', flex: 5 }}
        onPress={() => navigation.navigate("Detail", { item, distance })}>
        <View style={styles.midContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.seperator} />
          <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.meter}>{(distance * 1000).toFixed(0)}</Text>
            <Text style={styles.meter}>m</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 8,
    shadowOpacity: .8,
    shadowRadius: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    margin: '3%',
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: 'row'
  },
  leftContainer: {
    padding: '3%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  midContainer: {
    padding: '3%',
    width: windowWidth * 0.6,
    flex: 3
  },
  rightContainer: {
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '1%',
    paddingRight: '1%',
    flex: 2
  },
  fav: {
    width: windowWidth * 0.075,
    height: windowWidth * 0.075,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
  text: {
    fontSize: 12,
    color: 'rgba(0,0,0,.5)',
  },
  seperator: {
    height: windowWidth * 0.15,
    width: 1.5,
    marginRight: '10%',
    backgroundColor: 'rgba(112, 48, 160, .6)'
  },
  meter: {
    fontSize: 25,
    color: colors.black,
  }

})