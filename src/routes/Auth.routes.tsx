import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import CostumerRegister from '../pages/Customer/Register';
import PartnerRegister from '../pages/Partner/Register';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Sempre Mais Barato" component={SignIn} />
    <AuthStack.Screen name="Cadastro Cliente" component={CostumerRegister} />
    <AuthStack.Screen name="Cadastro Parceiro" component={PartnerRegister} />
  </AuthStack.Navigator>
);
export default AuthRoutes;
