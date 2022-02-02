import {View, Text} from 'react-native';
import React from 'react';
import styles from './ContentInputCard.style';
import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
const ContentInputCard = ({message}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>{message.name}</Text>
        <Text style={styles.text}>{formattedDate}</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}> {message.text}</Text>
      </View>
    </View>
  );
};

export default ContentInputCard;
