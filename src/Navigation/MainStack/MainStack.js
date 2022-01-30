import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Rooms from '../../pages/Rooms';
const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Rooms" component={Rooms} />
    </Stack.Navigator>
  );
};

export default MainStack;
