import {Alert} from 'react-native';
import api from './api.service';

interface Response {
  partner: boolean;
  user: {
    nome: string;
    _id: string;
  };
}

export function Signin(Login: string, senha: string): Promise<Response> {
  return new Promise((resolve) => {
    if (Login === '' && senha === '') {
    return Alert.alert('Todos os campos devem ser preenchidos!!');
  }
  if (Login.length === 14) {
    api.post('/authenticatecustomer', {
      cpf: Login,
      senha,
    })
      .then((res) => {
        resolve({
          user: res.data,
          partner: false,
        });
      })
      .catch(error => Alert.alert(error));
  }
  else {
    api.post('/authenticatepartner', {
      cnpj: Login,
      senha,
    })
      .then((res) => {
        resolve({
          user: res.data,
          partner: true,
        });
      })
      .catch(error => Alert.alert(error));
    }
  });
}