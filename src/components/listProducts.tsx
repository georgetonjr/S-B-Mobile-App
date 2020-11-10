import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// import { Container } from './styles';

const listProducts: React.FC = ({ data }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image
            source={{ uri: data.img }}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.fabricante}>{data.fabricante} </Text>
          <Text style={styles.preco}>R$ {data.valor}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  info: {
    marginTop: '0%'
  },

  image: {
    height: 75,
    width: 75,
  },

  fabricante: {
    marginLeft: '42 %',
    fontWeight: 'bold',
    fontSize: 17,
  },

  preco: {
    marginLeft: '42%',
    fontWeight: 'bold',
    fontSize: 15,

  },

});

export default listProducts;