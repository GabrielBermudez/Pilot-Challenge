import React from 'react';
import { View, Text, Button } from 'react-native';
import { makeStyles } from './styles';
import CustomModal from '../../../../../Components/CustomModal';
import { CustomButton } from '../../../../../Components/CustomButton';

interface DeleteUserProps {
  isModalVisible: boolean;
  userId: string;
  onCloseModal: () => void;
  onConfirm: ( id: string ) => void;
}

export const DeleteUser: React.FC<DeleteUserProps> = ( { isModalVisible, userId, onCloseModal, onConfirm } ) => {
  const styles = makeStyles();

  return (
    <CustomModal visible={ isModalVisible } onClose={ onCloseModal }>
      <View style={ styles.container }>
        <Text style={ styles.title }>Confirm Delete</Text>
        <Text>¿Are you sure you want to delete this user?</Text>
      </View>
      <CustomButton title={ 'Delete' } action={ () => onConfirm( userId ) } />
    </CustomModal>
  );
};
