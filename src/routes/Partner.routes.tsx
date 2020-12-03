import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../pages/Partner/Home';
import Products from '../pages/Partner/Products';
import RProduct from '../pages/Partner/RProduct';
import RSale from '../pages/Partner/RSale';
import ValidQRCode from '../pages/Partner/ValidQrCode';
import report from '../pages/Partner/ReportGeral';

const PartnerStack = createBottomTabNavigator();

const PartnerRoutes: React.FC = () => (
  <PartnerStack.Navigator initialRouteName="Produtos"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = focused
            ? 'ios-home'
            : 'ios-home';
            break;
          case 'Produtos':
            iconName = focused
            ? 'ios-basket'
            : 'ios-basket';
            break;
          case 'Cadastrar Produto':
            iconName = focused
            ? 'ios-add-circle-outline'
            : 'ios-add-circle-outline';
            break;
          case 'Cadastrar Promoção':
            iconName = focused
            ? 'ios-gift'
            : 'ios-gift';
            break;
          case 'Voucher':
            iconName = focused
            ? 'ios-qr-scanner'
            : 'ios-qr-scanner';
            break;
          case 'Perfil':
            iconName = focused ? 'ios-person' : 'ios-person';
            break;
          default:
            iconName = 'circle';
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#3498fd',
      inactiveTintColor: '#000',
    }}
  >
    <PartnerStack.Screen name="Produtos" component={Products} />
    <PartnerStack.Screen name="Cadastrar Produto" component={RProduct} />
    <PartnerStack.Screen name="Voucher" component={ValidQRCode} />
    <PartnerStack.Screen name="Perfil" component={report} />
  </PartnerStack.Navigator>
);
export default PartnerRoutes;
