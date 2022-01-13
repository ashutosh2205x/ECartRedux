import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ProductScreen from '../screens/Products/ProductScreen';
import {ROUTES} from './constants';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.PRODUCTS}>
      <Stack.Screen
        name={ROUTES.PRODUCTS}
        component={ProductScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

function AllRoutes() {
  return <MyStack />;
}
export default AllRoutes;
