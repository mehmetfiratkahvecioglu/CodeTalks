import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AuthStack from './Navigation/AuthStack';
const App = () => {
  return <AuthStack />;
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
