import { Text, TouchableOpacity } from 'react-native';
import { makeStyles } from './styles';

type CustomButtonProps = {
  title: string;
  action: () => void;
};

export const CustomButton = ( { title, action }: CustomButtonProps ) => {
  const styles = makeStyles();

  return (
    <TouchableOpacity style={ styles.button } onPress={ action }>
      <Text style={ styles.textButton }>{ title }</Text>
    </TouchableOpacity>
  );
};