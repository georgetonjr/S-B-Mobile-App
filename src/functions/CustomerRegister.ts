import {Alert} from 'react-native';
import Api from '../services/api.service';

const CustomerRegister = (
  nome: String,
  telefone: String,
  cpf: String,
  email: String,
  senha: String,
) => {
  Api.post('/registercustomer', {
    nome,
    telefone,
    cpf,
    email,
    senha,
  })
    .then(() => {
      Alert.alert('Úsuario cadastrado com sucesso!');
    })
    .catch((e: any) => {
      if (e.response.status === 400) {
        Alert.alert('Úsuario já cadastrado!');
      }
    });
};
export {CustomerRegister};
