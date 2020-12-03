
import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Modal,
  Alert, StyleSheet, Button
} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AuthContext from '../../../contexts/Auth';
import Loading from '../../../components/Loading';
import api from '../../../services/api.service';
import ListVoucher from '../../../components/listVoucher';

import styles from './style';


const QRCode: React.FC = () => {
  const [load, setLoad] = useState<Boolean>(true);
  const { user } = useContext(AuthContext);
  const [vouchers, setVouchers] = useState<any>(true);
  const [hasPermission, setHasPermission] = useState<any>(null);
  const [scanned, setScanned] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [voucher, setVoucher] = useState('');
  const [productVoucher, setProductVoucher] = useState<any>(null);
  const [active, setActive] = useState<boolean>(true);
  
  const attProductList = () => {
    api.get('/voucher/getpartner', { headers: { '_id': user?._id } })
      .then(response => setVouchers(response.data))
      .catch(error => console.error(error))
  };

  const getVoucher = () => {
    const _id = voucher;
    api.get('/voucher/get', { headers: { _id } })
      .then(response => setProductVoucher(response.data))
      .catch(error => console.log(error));
  };

  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    setVoucher(data);
    getVoucher();
  };

  const validarVoucher = () => {
    setLoad(true);
    const _id = voucher;
    api.post('/voucher/validate', { headers: { _id } })
      .then(response => {
        setLoad(false);
        Alert.alert('Voucher Validado com sucesso');
        setActive(response.data.active);
      })
      .catch(error => console.error(error));
  }
  
  useEffect(() => {
    attProductList();
    setLoad(false);
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }, []);
  
  if (load) {
    attProductList();
    return (<Loading/>);
  };
  
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}> Vouchers </Text>
      </View>
      <TouchableOpacity
        onPress={() => setIsVisible(!isVisible)}
        style={{justifyContent: 'center', width: '100%', height: 50, backgroundColor: '#3498dd'}}
      >
        <Text style={{alignSelf: 'center', color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          Validar voucher
          </Text>
      </TouchableOpacity>
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
      <Modal visible={isVisible}>
        <TouchableOpacity
          onPress={() => setIsVisible(false)}
        >
          <Text
            style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 1}}
          >
            X
          </Text>
        </TouchableOpacity>
        {!scanned ?  
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          />
          :
          <View>
            {productVoucher === null ?
              <View>
                <Text>Voucher invalido, por favor tente novamente!</Text>
                {scanned && <Button title={'Ler novamente'} onPress={() => setScanned(false)} />}
              </View>
              :
              <View>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={{ uri: productVoucher.produto.img }}
                    style={{height: 200, width: 200, borderRadius: 95, marginBottom: '2%'}}
                  />
                </View>
                <View style={{alignItems: 'center', marginBottom: '10%'}}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom:'1%'}}>Produto: {productVoucher.produto.fabricante} </Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom:'1%'}}>Preço: R$ {productVoucher.produto.valor}</Text>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom:'1%'}}> Estabelecimento: {productVoucher.produto.mercado}</Text>
                </View>
                {active
                  ?
                  <Button title={'Validar voucher'} onPress={validarVoucher} />
                  :
                  <Text style={{alignSelf: 'center', fontWeight: 'bold', fontSize: 18}}>Voucher já validado</Text>
                }
              </View>
            }
          </View>
        }

        
      </Modal>


    </SafeAreaView>
  );
}
const Separator = () => <View style={{flex:1, height: 1, backgroundColor: '#3498fd' }}/>
export default QRCode; 