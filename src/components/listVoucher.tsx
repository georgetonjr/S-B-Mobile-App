import React, { useState, useContext }from 'react';
import { Alert,View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';
import api from '../services/api.service';
import AuthContext from '../contexts/Auth';
import qrCode from '../services/qrCode.service';

const listVoucher: React.FC = ({ data }: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(true);
  const { user } = useContext(AuthContext);

  const validarVoucher = () => {
    const _id = data._id;

    api.post('/voucher/validate', { headers: { _id } })
      .then(response => {
        Alert.alert('Voucher Validado com sucesso');
        setActive(response.data.active);
      })
      .catch(error => console.error(error));
  }

  return (
    <View style={styles.container}>
     
        <TouchableOpacity
        onPress={() => setIsVisible(true)}
      >
        <View>
          <Image
            source={{ uri: data.produto.img }}
            style={{ height: 75, width: 75, borderRadius: 40 }}
          />
        </View>
        <View >
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{data.produto.fabricante} </Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>R$ {data.produto.valor}</Text>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Cliente: {data.cliente.nome}</Text>
        </View>
      </TouchableOpacity>
      

      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(!isVisible)}
      >

        <TouchableOpacity
          onPress={() => setIsVisible(!isVisible)}
        ><Text style={{ fontSize: 22, fontWeight: 'bold' }}>X</Text></TouchableOpacity>
        <Text style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold' }}>Produto</Text>
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
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>{data.produto.fabricante} </Text>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>R$ {data.produto.valor}</Text>
        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>Cliente: {data.cliente.nome}</Text>
        {active ?
          <View>
            <Text style={{ alignSelf: 'center', marginTop: 4, fontSize: 18, fontWeight: 'bold' }}>Voucher</Text>
            <Image
              style={{ alignSelf: 'center', width: 250, height: 250, marginTop: 4 }}
              source={{ uri: `${qrCode}${data._id}` }}
            />
            <Button title='Validar Voucher' onPress={validarVoucher}/>
          </View>
          
          : <Text style={{alignSelf: 'center', fontSize: 25, fontWeight: 'bold', marginTop: '5%'}}>Voucher já validado!</Text>}
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

export default listVoucher;