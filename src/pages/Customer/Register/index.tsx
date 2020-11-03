import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {mask} from '../../../functions/Mask';
import {cpf} from 'cpf-cnpj-validator';
import {CustomerRegister} from '../../../functions/CustomerRegister';

import styles from './styles';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [name, setName] = useState('');
  const [ccpf, setCcpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [csenha, setCsenha] = useState('');

  function checkPass() {
    if (csenha !== '' && senha !== csenha) {
      Alert.alert('As senhas precisam ser iguais');
      setSenha('');
      setCsenha('');
    }
    if (senha.length < 8) {
      Alert.alert('Minimo de 8 caracteres');
    }
  }

  function validaCPF(e: string) {
    if (!cpf.isValid(e)) {
      setCcpf('');
      Alert.alert('Por favor digite um CPF valido');
    }
    var e = mask.Cpf(ccpf);
    setCcpf(e);
  }

  function mTel(tel: string) {
    tel = tel.replace(/\D/g, '');
    tel = tel.replace(/^(\d)/, '($1');
    tel = tel.replace(/(.{3})(\d)/, '$1)$2');
    if (tel.length === 9) {
      tel = tel.replace(/(.{1})$/, '-$1');
    } else if (tel.length === 10) {
      tel = tel.replace(/(.{2})$/, '-$1');
    } else if (tel.length === 11) {
      tel = tel.replace(/(.{3})$/, '-$1');
    } else if (tel.length === 12) {
      tel = tel.replace(/(.{4})$/, '-$1');
    } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, '-$1');
    }
    setTelefone(tel);
  }

  async function handleSubmit() {
    if (
      name === '' &&
      telefone === '' &&
      ccpf === '' &&
      email === '' &&
      senha === ''
    ) {
      Alert.alert('Por favor preencha todos os campos');
    } else if (!isSelected) {
      Alert.alert('É necessario aceitar os termos para continuar');
    } else {
      CustomerRegister(name, telefone, ccpf, email, senha);
      setTimeout(() => {
        navigation.navigate('Sempre Mais Barato');
      }, 2000);
    }
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.txt}>Nome</Text>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.txt}>CPF</Text>
          <TextInput
            placeholder="000.000.000-00"
            keyboardType="numeric"
            style={styles.input}
            value={ccpf}
            onChangeText={setCcpf}
            maxLength={14}
            onBlur={() => {
              validaCPF(ccpf);
            }}
          />

          <Text style={styles.txt}>Telefone</Text>
          <TextInput
            placeholder="Telefone"
            style={styles.input}
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
            onBlur={() => mTel(telefone)}
          />

          <Text style={styles.txt}>E-mail</Text>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.txt}>Senha</Text>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
            onBlur={checkPass}
          />

          <Text style={styles.txt}>Confirmar senha</Text>
          <TextInput
            placeholder="Confirmar senha"
            style={styles.input}
            secureTextEntry={true}
            value={csenha}
            onChangeText={setCsenha}
            onBlur={checkPass}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={isSelected}
              onValueChange={(newValue) => setSelection(newValue)}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Aceitar termos.</Text>
          </View>

          <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
            <Text style={styles.botaotext}>Finalizar cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Register;
