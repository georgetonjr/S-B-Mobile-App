import React, { useState, useEffect, useContext } from 'react';
import { TextInput, View, Text, FlatList, Button, TouchableOpacity } from 'react-native';
import api from '../../../services/api.service';
import ListItem from '../../../components/listProductsCustomer'
import AuthContext from '../../../contexts/Auth';
import Loading from '../../../components/Loading';
import ListTag from '../../../components/listTag';

import styles from './styles';

const Products: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState<any>();
  const [load, setLoad] = useState<Boolean>(true);
  const [tagName, setTagname] = useState<string>('');
  const [tag, setTag] = useState();

  const attProductList = () => {
    setLoad(true);
    api.get('/gettag')
      .then(res => {
        setTag(res.data);
        setLoad(false);
      })
      .catch(error => {
        console.error(error);
        setLoad(false);
      });
    
  }
  const search = () => {
    api.get('/produto/search', { headers: { tagName } })
      .then(res => {
        console.log(res.data)
        setTag(res.data)
      })
      .catch(error => {
        console.error(error);
        setLoad(false);
      });
  };

  useEffect(() => {
    let mounted = true;

    attProductList();
    setLoad(!load);
    
    return function cleanup(): void {
      mounted = false
    }
  }, [])
  
  if (load) {
    return (<Loading/>);
  }

  return (
    <>
      <View style={styles.Prod}>
        <Text style={styles.text}> Produtos </Text> 
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize:16, alignSelf: 'center'}}>{ user?.nome}</Text>
      </View>

      <Button title='atualizar' onPress={attProductList} />
      <TextInput
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#EFF7FF'
        }}
        placeholder={'Coca-Cola'}
        onKeyPress={search}
        value={tagName}
        onChangeText={setTagname}
        maxLength={30}
      />
  
      <FlatList
        data={tag}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ListTag
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