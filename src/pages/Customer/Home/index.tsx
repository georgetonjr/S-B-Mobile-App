import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import AuthContext from '../../../contexts/Auth';
import api from '../../../services/api.service';
import Loading from '../../../components/Loading';
import ListPromo from '../../../components/listPromo';

import styles from './styles';

const Home: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  const [load, setLoad] = useState<boolean>(true);
  const [promos, setPromos] = useState<any>();

  const getPromo = () => {
    api.get('/promocao/getpromo')
      .then(res => setPromos(res.data))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getPromo();
    setLoad(false);
  }, [])

  if (load) {
    return <Loading />;
  };
  
  return (
    <>
      <View style={styles.Prod}>
        <Text style={styles.text}> Promoção </Text> 
      </View>

      <Button title='atualizar' onPress={getPromo}/>
      <FlatList
        data={promos}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ListPromo
            data={item}
          />
          
        )}
        ItemSeparatorComponent={ () => <Separator/>}
      />

    </>
  );
}

const Separator = () => <View style={{flex:1, height: 1, backgroundColor: '#3498fd' }}/>
export default Home;
