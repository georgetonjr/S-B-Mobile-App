import React, { useState, useContext }from 'react';
import { Alert,View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import api from '../services/api.service';
import AuthContext from '../contexts/Auth';
import qrCode from '../services/qrCode.service';

const listVoucherCustomer: React.FC = ({ data }: object | any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [qrC, setQrC] = useState<string>('');
  const { user } = useContext(AuthContext);
  
  const gerarVoucher = (produto: any) => {
    api.post('/voucher/create', {
      parceiro: produto.parceiro,
      cliente: user?._id,
      produto: data
    })
      .then(e => {
        let QRCode = `${qrCode}${e.data._id}`;
        setQrC(QRCode)
        
      })
      .catch(e => console.error(e))
  }

  return (
    <View style={styles.container}>
       <TouchableOpacity
        onPress={() => setIsVisible(true)}
      >
        <View>
          <Image
            source={{ uri: data.produto.img }}
            style={{height: 75, width: 75, borderRadius: 40}}
          />
        </View>
        <View >
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{data.produto.fabricante} </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>R$ {data.produto.valor}</Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}> Estabelecimento: {data.produto.mercado}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        onRequestClose={()=> setIsVisible(!isVisible)}
      >

        <TouchableOpacity
          onPress={()=> setIsVisible(!isVisible)}
        ><Text style={{fontSize: 18, fontWeight: 'bold'}}>X</Text></TouchableOpacity>
        <Text style={{ alignSelf: 'center' ,fontSize: 22, fontWeight: 'bold'}}>Produto</Text>
        <Image
          source={{ uri: data.produto.img }}
          style={{
            height: 150,
            width: 150,
            alignSelf: 'center',
            marginTop: 8,
            borderRadius: 75
          }}
        />
        <Text style={{ alignSelf: 'center' ,fontSize: 16, fontWeight: 'bold'}}>{data.produto.fabricante} </Text>
        <Text style={{ alignSelf: 'center' ,fontSize: 16, fontWeight: 'bold'}}>R$ {data.produto.valor}</Text>
        <Text style={{ alignSelf: 'center' ,fontSize: 16, fontWeight: 'bold'}}> Mercado: {data.produto.mercado}</Text>
        <Text style={{ alignSelf: 'center', marginTop: 4 ,fontSize: 18, fontWeight: 'bold'}}>Voucher</Text>
        <Image
          style={{ marginLeft: '20%' , width: 250, height: 250, marginTop: 4 }}
          source={{uri: `${qrCode}${data._id}`}}
        />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  

});

export default listVoucherCustomer;