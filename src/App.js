import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
const App = () => {
  return (
    <View style={styles.container}>
      <SignUp />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
