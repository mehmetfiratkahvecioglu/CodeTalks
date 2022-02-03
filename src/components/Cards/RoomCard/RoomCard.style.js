import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 7,
    width: Dimensions.get('window').width / 2 - 14,
    height: Dimensions.get('window').width / 3 - 20,
    backgroundColor: '#0d47a1',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
