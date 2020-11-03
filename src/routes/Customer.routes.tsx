import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Customer Screens
import Home from '../pages/Customer/Home';
import Product from '../pages/Customer/Product';
import QRCode from '../pages/Customer/QRCode';

const CustomerStack = createBottomTabNavigator();

const CustomerRoutes: React.FC = () => (
  <CustomerStack.Navigator initialRouteName="Home">
    <CustomerStack.Screen name="Home" component={Home} />
    <CustomerStack.Screen name="Produtos" component={Product} />
    <CustomerStack.Screen name="Voucher" component={QRCode} />
  </CustomerStack.Navigator>
);
export default CustomerRoutes;