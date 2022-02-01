import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Rooms from '../../pages/Rooms';
import Messages from '../../pages/Messages';
const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {color: '#0d47a1'},
      }}>
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Rooms" component={Rooms} />
    </Stack.Navigator>
  );
};

export default MainStack;
