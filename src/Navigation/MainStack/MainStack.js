import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Rooms from '../../pages/Rooms';
import Messages from '../../pages/Messages';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {color: '#0d47a1'},
      }}>
      <Stack.Screen
        name="Messages"
        component={Messages}
        options={{
          headerRight: () => (
            <Icon
              name="logout"
              size={30}
              color={'#0d47a1'}
              onPress={() => auth().signOut()}
            />
          ),
        }}
      />
      <Stack.Screen name="Rooms" component={Rooms} />
    </Stack.Navigator>
  );
};

export default MainStack;
