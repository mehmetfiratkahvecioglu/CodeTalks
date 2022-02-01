import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#0d47a1',
    borderRadius: 10,
    padding: 6,
  },
  titleContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  messageContainer: {paddingVertical: 7},
  text: {color: 'white'},
  messageText: {color: 'white', fontWeight: 'bold', fontSize: 15},
});

export default styles;
