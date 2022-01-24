import {View, Text, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const App = () => {
  const handleAuth = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <View>
      <Text>FIRE BASE</Text>
      <Button title="sgin in" onPress={handleSignIn} />
      <Button title="sign up" onPress={handleAuth} />
    </View>
  );
};

export default App;
