import React, {useContext, useState} from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import AuthContext from '../../../contexts/Auth';

import styles from './styles';

const ReportGeral: React.FC = () => {
  const {user, signOut} = useContext(AuthContext);
  const [nome, setNome] = useState('');
  console.log(user)
  return (
    <View>

      <View style={styles.header}>
        <Text style={styles.text}> Cadastrar Promoção </Text> 
      </View>

      <View style={styles.account}>
        <Image style={styles.picture} source={require('../../../assets/perfil.png')} />
        <Text style={styles.label}> {user.nome}</Text>
      </View>

    </View>
  );
}

export default ReportGeral;