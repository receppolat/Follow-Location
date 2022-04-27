import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Location from '../../../scenes/Locations/LocationList';
import Detail from '../../../scenes/Locations/LocationDetail';

const LocationStack = createNativeStackNavigator();

export default function CreateLocationStack() {
  return (
    <LocationStack.Navigator>
      <LocationStack.Screen
        name= "LocationList"
        component={Location}
        options={{ headerShown: false }}
      />
      <LocationStack.Screen
        name= "Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    </LocationStack.Navigator>
  );
}
