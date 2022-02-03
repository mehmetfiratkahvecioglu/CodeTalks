import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './RoomCard.style';
const RoomCard = ({room, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{room.roomName}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
