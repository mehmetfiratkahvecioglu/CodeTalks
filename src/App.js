import React, {useEffect, useState} from 'react';
import AuthStack from './Navigation/AuthStack';
import MainStack from './Navigation/MainStack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      {!userSession ? <AuthStack /> : <MainStack />}

      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
