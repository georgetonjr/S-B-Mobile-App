import React, { useState, useContext }from 'react';
import { Alert,View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import AuthContext from '../contexts/Auth';

const listReport: React.FC = ({ data }: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>| Produto: {data.produto.fabricante} | Preço: R$ {data.produto.valor}| Cliente: { data.cliente.nome}|</Text>
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },

});

export default listReport;