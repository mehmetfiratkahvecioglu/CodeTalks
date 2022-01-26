import {View, Text, Button} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';

const App = () => {
  const reference = database().ref('cars/ticari');

  const checkDB = () => {
    reference.once('value').then(snapshot => {
      const Response = snapshot.val();
      console.log(Response);
    });
  };

  const listenDB = () => {
    reference.on('value', snapshot => {
      console.log('User data: ', snapshot.val());
    });
  };

  const pushData = () => {
    reference.push({
      name: 'asfasdK',
      surname: '999mfk',
    });
  };

  return (
    <View>
      <Text>FIRE BASE</Text>

      <Button title="check DB" onPress={checkDB} />
      <Button title="LİSTEN DB" onPress={listenDB} />
      <Button title="PUSH DATA" onPress={pushData} />
    </View>
  );
};

export default App;
