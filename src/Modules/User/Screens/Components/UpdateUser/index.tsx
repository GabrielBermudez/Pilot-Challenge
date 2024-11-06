import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { makeStyles } from './styles';
import CustomModal from '../../../../../Components/CustomModal';
import { IFormDataUser } from '../../../../Core/interfaces';
import { CustomButton } from '../../../../../Components/CustomButton';

interface UpdateUserProps {
  isModalVisible: boolean;
  user: IFormDataUser;
  onCloseModal: () => void;
  onUpdate: ( data: IFormDataUser ) => void;
}

export const UpdateUser: React.FC<UpdateUserProps> = ( { isModalVisible, user, onCloseModal, onUpdate } ) => {
  const styles = makeStyles();

  const [ formData, setFormData ] = useState( user );

  return (
    <CustomModal visible={ isModalVisible } onClose={ onCloseModal }>
      <View style={ styles.container }>
        <Text style={ styles.title }>Update User</Text>
        <TextInput
          placeholder="Username"
          value={ formData.username }
          onChangeText={ ( text ) => setFormData( { ...formData, username: text } ) }
          style={ styles.input }
        />
        <TextInput
          placeholder="Email"
          value={ formData.email }
          onChangeText={ ( text ) => setFormData( { ...formData, email: text } ) }
          style={ styles.input }
        />
      </View>
      <CustomButton title={ 'Update' } action={ () => onUpdate( formData ) } />
    </CustomModal>
  );
};
