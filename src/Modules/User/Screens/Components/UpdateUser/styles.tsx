import {StyleSheet} from 'react-native';

export const makeStyles = () => {
  return StyleSheet.create({
    container: {
      padding: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    },
  });
};
