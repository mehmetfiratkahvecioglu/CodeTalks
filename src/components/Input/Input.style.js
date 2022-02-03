import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {marginVertical: 5},
  input: {
    borderBottomWidth: 1.5,
    borderColor: 'white',
    padding: Platform.OS === 'ios' ? 5 : 5,
    color: 'white',
  },
});

export default styles;
