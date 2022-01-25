import {View, Text, Button} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';

const App = () => {
  const reference = database().ref();

  const checkDB = () => {
    reference.once('value').then(snapshot => {
      const Response = snapshot.val();
      console.log(Response);
    });
  };

  return (
    <View>
      <Text>FIRE BASE</Text>

      <Button title="check DB" onPress={checkDB} />
    </View>
  );
};

export default App;
