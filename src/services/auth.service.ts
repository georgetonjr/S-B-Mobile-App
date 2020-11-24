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
    return ;
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
      .catch(e => {
        if (e.response.status === 400) {
          Alert.alert('Usuário não encontrado!');
        } else if (e.response.status === 401) {
          Alert.alert('Usuário ou senha incorreta!');
        }
      });
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
      .catch(e => {
        if (e.response.status === 400) {
          Alert.alert('Usuário não encontrado!');
        } else if (e.response.status === 401) {
          Alert.alert('Usuário ou senha incorreta!');
        } 
      } );
    }
  });
}