import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './Button.style';
const Button = ({title, theme = 'tertiary', onPress, loading}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={'black'} />
      ) : (
        <Text style={styles[theme].title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
