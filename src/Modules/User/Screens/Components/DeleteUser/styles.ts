import { StyleSheet } from 'react-native';

export const makeStyles = () => {
  return StyleSheet.create({
    container: { 
      padding: 20 
    },
    title: { 
      fontSize: 18, 
      fontWeight: 'bold', 
      marginBottom: 10 
    },
  });
}