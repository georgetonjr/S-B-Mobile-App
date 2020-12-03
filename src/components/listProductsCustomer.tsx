import React, { useState, useContext }from 'react';
import { Alert,View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import api from '../services/api.service';
import AuthContext from '../contexts/Auth';
import qrCode from '../services/qrCode.service';

const listProducts: React.FC = ({ data }: any) => {
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
            source={{ uri: data.img }}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.fabricante}>{data.fabricante} </Text>
          <Text style={styles.preco}>R$ {data.valor}</Text>
          <Text style={styles.mercado}> Estabelecimento: {data.mercado}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        onRequestClose={()=> setIsVisible(false)}
      >

        <TouchableOpacity
          onPress={()=> setIsVisible(false)}
        ><Text style={{fontSize: 18, fontWeight: 'bold'}}>X</Text></TouchableOpacity>
        <Image
          source={{ uri: data.img }}
          style={{
            height: 150,
            width: 150,
            marginLeft: '32%'
          }}
        />
        <Text style={styles.fabricante}>{data.fabricante} </Text>
        <Text style={styles.preco}>R$ {data.valor}</Text>
        <Text style={styles.mercado}> Mercado: {data.mercado}</Text>
        {qrC ?
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '7%'
          }}>
            <Text style={{fontSize:17, fontWeight: 'bold', color: '#000'}}>Voucher gerado com sucesso!</Text>
            <Image
              style={{ width: 250, height: 250, marginTop: 8 }}
              source={{uri: qrC}}
            />
          </View>
          :
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            backgroundColor: '#3498fd',
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
              alignSelf: "center",
            marginTop: 15
          }}
          onPress={() => gerarVoucher(data)}
        >
          <Text style={{
            color: '#fff',
            marginTop: 3,
            alignSelf:'center',
            fontSize: 17,
            fontFamily: 'sans-serif',
          fontWeight: 'bold',
          }}>Gerar Voucher</Text>
        </TouchableOpacity>}

      </Modal>

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
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
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

export default listProducts;