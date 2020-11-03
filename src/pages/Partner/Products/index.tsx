import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Products: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Produtos</Text>
    </View>
  );
}
export default Products;