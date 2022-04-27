import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import Header from './Title';
import List from './List';
import { connect } from 'react-redux';
import { getValues } from '@locations/operations';
import { store } from '../../../redux/store';

function LocationList(props) {
  useEffect(() => {
    const currentLocation = store.getState().location.currentLocation;
    const { getValues } = props;
    if (!currentLocation)
      getValues();
  }, []);
  const loading = store.getState().location.loading;
  const locationData = props?.data?.currentLocation?.data;
  return (
    <View style={styles.container}>
      <Header />
      {loading ? <ActivityIndicator style={{ flex: 1 }} /> : null}
      <List locationData={locationData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
})



const mapStateToProps = ({ location }) => {
  return {
    data: location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getValues: () => dispatch(getValues()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
