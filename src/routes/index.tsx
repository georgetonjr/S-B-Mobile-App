import React, {useContext} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import AuthContext from '../contexts/Auth';

import AuthRoutes from './Auth.routes';
import CustomerRoutes from './Customer.routes';
import PartnerRoutes from './Partner.routes';

const Routes: React.FC = () => {
  const {signed, partner, loading} = useContext(AuthContext);

  if (loading) {
    return (
      <View style={styles.Loading}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  if (signed) {
    return partner ? <PartnerRoutes /> : <CustomerRoutes />;
  } else {
    return <AuthRoutes />;
  }
};
export default Routes;

const styles = StyleSheet.create({
  Loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
