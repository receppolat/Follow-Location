import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LocationStack, DetailStack } from './Stacks';
const Root = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer initialRouteName="LocationStack">
            <Root.Navigator>
                <Root.Screen
                    options={{ headerShown: false }}
                    name="LocationStack"
                    component={LocationStack}
                />
            </Root.Navigator>
        </NavigationContainer>
    );
}
