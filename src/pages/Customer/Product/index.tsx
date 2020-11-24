import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, Text, FlatList, Button } from 'react-native';
import api from '../../../services/api.service';
import ListItem from '../../../components/listProductsCustomer'
import AuthContext from '../../../contexts/Auth';
import Loading from '../../../components/Loading';

import styles from './styles';

const Products: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState<any>();
  const [load, setLoad] = useState<Boolean>(true);

  const attProductList = () => {
    setLoad(true);
    api.get('/getprod')
      .then(response => {
        setProducts(response.data);
        setLoad(false);
      })
      .catch(error => console.error(error));
    
  }

  useEffect(() => {
    attProductList();
    setLoad(!load);
  }, [])
  
  if (load) {
    return (<Loading/>);
  }

  return (
    <>
      <View style={styles.Prod}>
        <Text style={styles.text}> Produtos </Text> 
      </View>

      <Button title='atualizar' onPress={attProductList}/>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ListItem
            data={item}
          />
          
        )}
        ItemSeparatorComponent={ () => <Separator/>}
      />

    </>
  );
}

const Separator = () => <View style={{flex:1, height: 1, backgroundColor: '#3498fd' }}/>
export default Products;