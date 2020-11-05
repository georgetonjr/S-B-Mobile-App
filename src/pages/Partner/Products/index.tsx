import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';

const Products: React.FC = () => {
  return (
    <ScrollView>
       <View style={styles.header}>
        <Text style={styles.text}> Produtos </Text> 
      </View>

    </ScrollView>
  );
}
export default Products;