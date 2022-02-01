import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
  },
  innerContainer: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
    padding: 20,
  },
  inputContainer: {flex: 1},
});

export default styles;
