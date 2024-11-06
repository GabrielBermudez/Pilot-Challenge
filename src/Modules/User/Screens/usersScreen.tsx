import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { useUsers } from '../Hooks/useUsers';
import UserList from './Components/UserList';
import { CreateUser } from './Components/CreateUser';
import { makeStyles } from './styles';
import { CustomButton } from '../../../Components/CustomButton';
import { IFormDataUser } from '../../Core/interfaces';
import { User } from '../Models/User';

export const UsersScreen: React.FC = () => {
  const styles = makeStyles();
  const { users, addUser, removeUser, updateUser } = useUsers();

  const [ isModalVisible, setIsModalVisible ] = useState( false );

  const handleAddUser = ( formData: IFormDataUser ) => {
    addUser( formData.username, formData.email );
    handlerCloseModal();
  };

  const handleUpdateUser = ( user: User ) => {
    updateUser( user.id, user.username, user.email );
  };

  const handleDeleteUser = ( id: string ) => {
    removeUser( id );
    handlerCloseModal();
  };

  const handlerCloseModal = () => {
    setIsModalVisible( false );
  };

  return (
    <View style={ styles.container }>
      <Text style={ styles.header }>User Manager</Text>
      <CustomButton title={ 'Create User' } action={ () => setIsModalVisible( true ) } />

      <UserList users={ users } onEdit={ handleUpdateUser } onDelete={ handleDeleteUser } />
      <CreateUser isModalVisible={ isModalVisible } onCloseModal={ handlerCloseModal } onSave={ handleAddUser } />
    </View>
  );
};
