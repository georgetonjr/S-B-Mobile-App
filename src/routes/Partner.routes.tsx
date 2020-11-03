import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Partner/Home';
import Products from '../pages/Partner/Products';
import RProduct from '../pages/Partner/RProduct';
import RSale from '../pages/Partner/RSale';
import ValidQRCode from '../pages/Partner/ValidQrCode';
import report from '../pages/Partner/ReportGeral';

const PartnerStack = createBottomTabNavigator();

const PartnerRoutes: React.FC = () => (
  <PartnerStack.Navigator initialRouteName="Home">
    <PartnerStack.Screen name="Home" component={Home} />
    <PartnerStack.Screen name="Produtos" component={Products} />
    <PartnerStack.Screen name="Cadastrar Produto" component={RProduct} />
    <PartnerStack.Screen name="Cadastrar Promoção" component={RSale} />
    <PartnerStack.Screen name="Voucher" component={ValidQRCode} />
    <PartnerStack.Screen name="MC" component={report} />
  </PartnerStack.Navigator>
);
export default PartnerRoutes;
