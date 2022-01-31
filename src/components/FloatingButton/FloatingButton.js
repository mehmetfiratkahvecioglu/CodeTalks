import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './FloatingButton.style';
const FloatingButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="plus" color={'white'} size={25} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
