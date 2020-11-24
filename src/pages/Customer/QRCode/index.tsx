
import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Modal
} from 'react-native';
import AuthContext from '../../../contexts/Auth';
import Loading from '../../../components/Loading';
import api from '../../../services/api.service';
import ListVoucher from '../../../components/listVoucherCustomer';

import styles from './style';


const QRCode: React.FC = () => {
  const [load, setLoad] = useState<Boolean>(true);
  const { user } = useContext(AuthContext);
  const [vouchers, setVouchers] = useState<any>(true);
  
  const attProductList = () => {
    api.get('/voucher/getcustomer', {headers: { '_id': user?._id}}) 
      .then(response => setVouchers(response.data))
      .catch(error => console.error(error))
    
  }

  useEffect(() => {
    attProductList();
    setLoad(false);
  }, [])
  
  if (load) {
    return (<Loading/>);
  }


  

  
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}> Vouchers </Text>
      </View>
      <View>
      <FlatList
        data={vouchers}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ListVoucher
            data={item}
          />
          
        )}
        ItemSeparatorComponent={ () => <Separator/>}
      />
      </View>


    </SafeAreaView>
  );
}
const Separator = () => <View style={{flex:1, height: 1, backgroundColor: '#3498fd' }}/>
export default QRCode; 