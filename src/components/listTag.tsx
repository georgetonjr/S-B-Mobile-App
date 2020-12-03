import React, { useState, useContext }from 'react';
import { Alert,View, Text, Image, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import api from '../services/api.service';
import AuthContext from '../contexts/Auth';
import ListItem from './listProductsCustomer';

const listTag: React.FC = ({ data }: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [qrC, setQrC] = useState<string>('');
  const { user } = useContext(AuthContext);
  const [product, setProducts] = useState<any>();
  const searchProduct = (tag: string) => { 
    api.get('/getprodbytag', { headers: { fabricante: tag } })
      .then(res => {
        let proo = res.data;
        let produtos = proo.sort(function (a: any, b: any) {
          return a.valor < b.valor ? -1 : a.valor > b.valor ? 1 : 0;
        })
        setProducts(produtos);
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true)
          searchProduct(data.tagName)
        }}
      >
        <View style ={styles.container}>
          <Image
            source={{ uri: data.img }}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.fabricante}>{data.tagName} </Text>
        </View>
      </TouchableOpacity>
      <Modal
        visible={isVisible}
        onRequestClose={()=> setIsVisible(false)}
      >
        <TouchableOpacity
          onPress={()=> setIsVisible(false)}
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>X</Text>
        </TouchableOpacity>

        <View style={styles.Prod}>
          <Text style={styles.text}> Produtos </Text> 
        </View>

        <FlatList
        data={product}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ListItem
            data={item}
          />
          
        )}
        ItemSeparatorComponent={ () => <Separator/>}
      />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  info: {
    marginTop: '1%'
  },

  image: {
    height: 75,
    width: 75,
  },

  fabricante: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  Prod: {
    borderColor: '#000',
    backgroundColor: '#3498ae',
    borderRadius:2,
  },
  
  text: {
    marginTop:35,
    alignSelf:'center',
    fontSize: 25,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color:'#fff',
    
  },

  preco: {
    marginLeft: '42%',
    fontWeight: 'bold',
    fontSize: 15,
  },
  mercado: {
    marginLeft: '42%',
    fontWeight: 'bold',
    fontSize: 15,
  },

});

const Separator = () => <View style={{flex:1, height: 1, backgroundColor: '#3498fd' }}/>
export default listTag;