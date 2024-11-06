import { StyleSheet } from 'react-native';
import { colors } from '../../Utils/colors';

export const makeStyles = () => {
  return StyleSheet.create( {
    button: {
      backgroundColor: colors.purple,
      padding: 10,
      borderRadius: 8,
    },
    textButton: {
      fontSize: 16,
      color: colors.white,
      textAlign: 'center'
    }
  } );
};