import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
const Rooms = () => {
  return (
    <View>
      <Text>***********ROOMSSSS*********</Text>
      <Button
        title="çıkış"
        onPress={() => {
          auth().signOut();
        }}
      />
    </View>
  );
};

export default Rooms;
