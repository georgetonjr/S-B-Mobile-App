import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth.service';

interface AuthContextData {
  signed: boolean;
  user: object | null;
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
      if (User) {
        setUser(JSON.parse(User));
      }
      setLoading(false);
    }
    loadStorage();
  }, []);
  
  async function Signin(login: string, senha: string) {
    if (user === null) {
      setLoading(true);
    }
    const response = await auth.Signin(login, senha);
    setUser(response.user);
    setPartner(response.partner);
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    setLoading(false);
  }

  async function signOut() {
    if (user !== null) {
      setLoading(true);
    }
    await AsyncStorage.clear();
    setUser(null);
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