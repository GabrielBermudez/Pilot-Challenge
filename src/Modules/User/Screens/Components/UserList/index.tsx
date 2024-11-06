// src/components/UserList/UserList.tsx
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { User } from '../../../Models/User';
import { makeStyles } from './styles';
import { CustomButton } from '../../../../../Components/CustomButton';
import { DeleteUser } from '../DeleteUser';
import { UpdateUser } from '../UpdateUser';
import { IFormDataUser } from '../../../../Core/interfaces';

interface UserListProps {
  users: User[];
  onEdit: ( user: User ) => void;
  onDelete: ( id: string ) => void;
}

interface IUser {
  id: string;
  username: string;
  email: string;
}

const UserList: React.FC<UserListProps> = ( { users, onEdit, onDelete } ) => {
  const styles = makeStyles();

  const [ isModalVisible, setIsModalVisible ] = useState( {
    visible: false,
    type: '',
  } );
  const [ currentUser, setCurrentUser ] = useState<User>();

  const showUserModal = ( user: User, type: string ) => {
    setCurrentUser( user );
    setIsModalVisible( {
      visible: true,
      type,
    } );
  };

  const handlerCloseModal = () => {
    setIsModalVisible( {
      visible: false,
      type: '',
    } );
  };

  const handlerUpdateUser = ( userFormData: IFormDataUser ) => {
    currentUser && onEdit( { ...userFormData, id: currentUser.id, getDescription: currentUser.getDescription } );
    handlerCloseModal();
  };

  const handlerDeleteUser = ( id: string ) => {
    onDelete( id );
    handlerCloseModal();
  };

  return (
    <View>
      <FlatList
        data={ users }
        keyExtractor={ ( user ) => user.id }
        renderItem={ ( { item } ) => (
          <View style={ styles.userItem }>
            <Text>{ item.getDescription() }</Text>
            <View style={ styles.actions }>
              <CustomButton title="Edit" action={ () => /*onEdit( item )*/showUserModal( item, 'edit' ) } />
              <CustomButton title="Delete" action={ () => showUserModal( item, 'delete' ) } />
            </View>
          </View>
        ) }
      />
      { isModalVisible.type === 'edit' && currentUser && <UpdateUser isModalVisible={ isModalVisible.visible } onCloseModal={ handlerCloseModal } user={currentUser} onUpdate={ handlerUpdateUser } /> }
      { isModalVisible.type === 'delete' && currentUser && <DeleteUser isModalVisible={ isModalVisible.visible } onCloseModal={ handlerCloseModal } userId={ currentUser.id } onConfirm={ handlerDeleteUser } /> }
    </View>

  );
};



export default UserList;
