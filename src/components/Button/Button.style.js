import {StyleSheet} from 'react-native';

const baseStyle = {
  container: {
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  primary: {
    ...baseStyle,
    container: {...baseStyle.container, backgroundColor: 'white'},
    title: {...baseStyle.title, color: '#0d47a1'},
  },
  secondary: {
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    title: {...baseStyle.title, color: 'white'},
  },
  tertiary: {
    ...baseStyle,
    container: {
      ...baseStyle.container,
      backgroundColor: '#0d47a1',
    },
    title: {...baseStyle.title, color: 'white'},
  },
});

export default styles;
