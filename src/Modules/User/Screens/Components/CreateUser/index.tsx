import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { makeStyles } from './styles';
import CustomModal from '../../../../../Components/CustomModal';
import { CustomButton } from '../../../../../Components/CustomButton';
import { IFormDataUser } from '../../../../Core/interfaces';

interface CreateUserProps {
  isModalVisible: boolean;
  onCloseModal: () => void;
  onSave: ( data: IFormDataUser ) => void;
}

export const CreateUser: React.FC<CreateUserProps> = ( { isModalVisible, onCloseModal, onSave } ) => {
  const styles = makeStyles();
  const [ formData, setFormData ] = useState<IFormDataUser>( { username: '', email: '' } );

  return (
    <CustomModal visible={ isModalVisible } onClose={ onCloseModal }>
      <View style={ styles.container }>
        <Text style={ styles.title }>Create User</Text>
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
        <CustomButton title={ 'Save' } action={ () => onSave( formData ) } />
      </View>
    </CustomModal>
  );
};

