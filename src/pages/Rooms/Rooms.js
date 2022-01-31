import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import FloatingButton from '../../components/FloatingButton';
const Rooms = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>***********ROOMSSSS*********</Text>
      <Icon name="rocket" color={'red'} size={40} />
      <FloatingButton />

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
