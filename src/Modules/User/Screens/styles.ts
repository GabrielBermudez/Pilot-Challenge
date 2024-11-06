import { StyleSheet } from 'react-native';
import { colors } from '../../../Utils/colors';

export const makeStyles = () => {
  return StyleSheet.create( {
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f0f0f0',
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  } );
};