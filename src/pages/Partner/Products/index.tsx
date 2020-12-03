import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, View, Text, FlatList, Button } from 'react-native';
import api from '../../../services/api.service';
import ListItem from '../../../components/listProducts'
import AuthContext from '../../../contexts/Auth';
import Loading from '../../../components/Loading';

import styles from './styles';

const Products: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState<any>();
  const [load, setLoad] = useState<Boolean>(true);

  const attProductList = () => {
    api.get('/getprodpartner', { headers: {id: user?._id} }) 
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
    
  }

  useEffect(() => {
    let mounted = true
    attProductList();
    setLoad(false);

    return function cleanup(): void {
      mounted = false
    }
  }, [])
  
  if (load) {
    return (<Loading/>);
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}> Produtos </Text> 
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize:16, alignSelf: 'center'}}>{ user?.nome}</Text>
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