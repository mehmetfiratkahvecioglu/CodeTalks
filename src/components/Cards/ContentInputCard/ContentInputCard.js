import {View, Text} from 'react-native';
import React from 'react';
import styles from './ContentInputCard.style';
const ContentInputCard = ({message}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{message.name}</Text>
        <Text style={styles.text}>{message.date}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}> {message.text}</Text>
      </View>
    </View>
  );
};

export default ContentInputCard;
