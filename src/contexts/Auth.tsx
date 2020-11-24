import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth.service';

interface AuthContextData {
  signed: boolean;
  user: {
    Razao: string | null;
    _id: string | null;
    bairro: string | null;
    celular: string | null;
    cep: string | null;
    cidade: string | null;
    complemento: string | null;
    endereco: string | null;
    estado: string | null;
    numero: string | null;
    cnpj: string | null;
    cpf: string | null;
    email: string | null; 
    nome: string | null;
    telefone: string | null; 
  } | null;
  partner: boolean | null;
  loading: boolean;
  Signin(login: string, senha: string): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => { 
  const [user, setUser] = useState<object | null>(null);
  const [partner, setPartner] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const User = await AsyncStorage.getItem('@RNAuth:user');
      const Partner = await AsyncStorage.getItem('@RNAuth:partner')
      if (User) {
        setUser(JSON.parse(User));
        setPartner(JSON.parse(Partner));
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function Signin(login: string, senha: string) {
    if (user === null) {
      setLoading(true);
    }
    setLoading(true);
    auth.Signin(login, senha)
      .then(res => {
        setUser(res.user);
        setPartner(res.partner);

        AsyncStorage.setItem('@RNAuth:user', JSON.stringify(res.user));
        if (res.partner)
          AsyncStorage.setItem('@RNAuth:partner', JSON.stringify(true));
      })
      .catch(error => console.error(error.message))
    
    setLoading(false);
  }

  async function signOut() {
    if (user !== null) {
      setLoading(true);
    }
    await AsyncStorage.clear();
    setUser(null);
    setPartner(null);
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, Signin, signOut, partner, loading}}>
      {children}
    </AuthContext.Provider>
  );  
}
export default AuthContext;