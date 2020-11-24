import React, {useContext, useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import AuthContext from '../../../contexts/Auth';

import styles from './styles';

const ReportGeral: React.FC = () => {
  const {user, signOut} = useContext(AuthContext);
  const [nome, setNome] = useState<any>(user?.nome);
  const [cpf, setCpf] = useState<any>(user?.cpf);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>

      <View style={styles.header}>
        <Text style={styles.text}> Minha Conta </Text> 
      </View>

      <View style={styles.account}>
        <Image style={styles.picture} source={require('../../../assets/perfil.png')} />
        <Text style={styles.label}> {nome}</Text>
      </View>

      <View>
        <Text style={styles.txt}>Nome</Text>
        <TextInput
          placeholder={nome}
          style={styles.input}
        />

        <Text style={styles.txt}>CPF</Text>
        <TextInput
          value={cpf}
          style={styles.input}
        />  

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}> Alterar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={signOut}>
          <Text style={styles.btnTxt}> Sair</Text>
        </TouchableOpacity>

      </View>
      
    </View>
  );
}

export default ReportGeral;