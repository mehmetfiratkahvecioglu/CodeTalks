import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './Input.style';

const Input = ({placeHolder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeHolder}
        placeholderTextColor={'white'}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
