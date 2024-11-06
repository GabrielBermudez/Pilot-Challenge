import { StyleSheet } from 'react-native';

export const makeStyles = () => {
  return StyleSheet.create( {
    userItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    actions: {
      flexDirection: 'row',
      gap: 10,
    },
  } );
};