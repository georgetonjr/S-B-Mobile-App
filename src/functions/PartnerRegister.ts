import {Alert} from 'react-native';
import Api from '../services/api.service';

const PartnerRegister = (
  Razao: String,
  nome: String,
  cnpj: String,
  email: String,
  telefone: String,
  celular: String,
  cep: String,
  endereco: String,
  complemento: String,
  numero: String,
  bairro: String,
  cidade: String,
  estado: String,
  senha: String,
) => {
  Api.post('/registerpartner', {
    Razao,
    nome,
    cnpj,
    email,
    telefone,
    celular,
    cep,
    endereco,
    complemento,
    numero,
    bairro,
    cidade,
    estado,
    senha,
  })
    .then(() => {
      Alert.alert('Usuário cadastrado com sucesso!');
    })
    .catch((e: any) => {
      console.log(e.response.status)
      if (e.response.status === 401) {
        Alert.alert('Usuário já cadastrado!');
      } else {
        Alert.alert('Usuário já cadastrado!'); 
      }
    });
};
export {PartnerRegister};
