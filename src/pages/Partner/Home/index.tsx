import React, {useContext, useState} from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '../../../contexts/Auth';

import styles from './styles';

const Home: React.FC = () => {
  const {user, signOut} = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Tela Inicial Parceiro</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};
export default Home;
