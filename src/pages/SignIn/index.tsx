import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../contexts/Auth';

import {mask} from '../../functions/Mask';

import styles from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const {Signin} = useContext(AuthContext);

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  async function handleSignIn() {
    if (login === '' || senha === '') {
      Alert.alert('Os campos Login e Senha são obrigatórios!');
    }else
      await Signin(login, senha);
  }

  function handleNavigate(e: string) {
    navigation.navigate(e);
  }

  function applyMask() {
    if (login.length === 11) {
      var cpf = mask.Cpf(login);
      setLogin(cpf);
    } else if (login.length === 14) {
      var cnpj = mask.Cnpj(login);
      setLogin(cnpj);
    }
  }

  const checkCampo = () => {
    if (login.length === 14) {
      return; 
    }
    else if (login.length === 18) {
      return;
    }
    else {
      Alert.alert("Por favor insira um CPF ou CNPJ Valido!");
    }
  }
    

  return (
    <View>
      <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="padding" enabled>
        
        <Image source={require('../../assets/logo.jpg')} style={styles.logo} />
        <Text style={styles.label}>Login</Text>
        <TextInput
          placeholder="CPF ou CNPJ"
          style={styles.input}
          keyboardType="numeric"
          maxLength={19}
          value={login}
          onChangeText={setLogin}
          onBlur={applyMask}
          onEndEditing={checkCampo}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botao} onPress={handleSignIn}>
          <Text style={styles.botaotext}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.avisotext}>
          Ainda não possui cadastro, selecione abaixo a opção que melhor se
          encaixa ao seu perfil
        </Text>
        <TouchableOpacity
          style={styles.botaoconsumidor}
          onPress={() => {
            handleNavigate('Cadastro Cliente');
          }}>
          <Text style={styles.botaotextcon}>Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoparceiro}
          onPress={() => {
            handleNavigate('Cadastro Parceiro');
          }}>
          <Text style={styles.botaotextpar}>Parceiro</Text>
        </TouchableOpacity>
          
        </KeyboardAvoidingView>
    </View>
  );
};
export default SignIn;
