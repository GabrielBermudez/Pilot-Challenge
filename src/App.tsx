import React from 'react';
import {SafeAreaView} from 'react-native';
import {UsersScreen} from './Modules/User/Screens/usersScreen';
import {makeStyles} from './styles';

const App = (): React.JSX.Element => {
  const styles = makeStyles();
  
  return (
    <SafeAreaView style={styles.container}>
      <UsersScreen />
    </SafeAreaView>
  );
};

export default App;
