import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '../../../contexts/Auth';

const Home: React.FC = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: 100,}}>Tela Inicial Cliente</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};
export default Home;
