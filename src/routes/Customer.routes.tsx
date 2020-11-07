import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//Customer Screens
import Home from '../pages/Customer/Home';
import Product from '../pages/Customer/Product';
import QRCode from '../pages/Customer/QRCode';

const CustomerStack = createBottomTabNavigator();

const CustomerRoutes: React.FC = () => (
  <CustomerStack.Navigator initialRouteName="Home"
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
    <CustomerStack.Screen name="Home" component={Home} />
    <CustomerStack.Screen name="Produtos" component={Product} />
    <CustomerStack.Screen name="Voucher" component={QRCode} />
  </CustomerStack.Navigator>
);
export default CustomerRoutes;