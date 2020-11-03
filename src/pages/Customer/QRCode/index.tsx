
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
  Modal
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../../../contexts/Auth';

import styles from './style';
import style from './style';

const QRCode: React.FC = () => {
  const navigation = useNavigation();
  const {user, signOut} = useContext(AuthContext);
  const [User, setUser] = useState({});
  const product = {
    img: 'https://www.teclasap.com.br/wp-content/uploads/2011/10/coke-2.jpg',
    name: 'Coca-Cola Lata: 350ml',
    mercado: 'Supercei',
    preco: 'R$ 3,49'
  };
  const getCurrentDate=(val = 0)=>{
    var date = new Date().getDate() + val;
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return date + '/' + month + '/' + year;
  };

  async function gerarVoucher(productinfo: string) {
    axios.get(`https://chart.googleapis.com/chart?chs=150%C3%97150&cht=qr&chl=${productinfo}`)
  }
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}> Voucher </Text>
      </View>
      <Text style={{fontSize: 16}}><Text style={{fontWeight: 'bold'}}>Data de Emissão: </Text>{getCurrentDate()}</Text>
      <Text> </Text>
      <View>
        <View style={styles.product}>
          <Image style={styles.prodImage}
            source={{ uri: product.img }}
          />
          <Text style={styles.productInfo }><Text style={{fontWeight: 'bold'}}>Estabelecimento: </Text>{product.mercado}</Text>
          <Text style={styles.productInfo}><Text style={{fontWeight: 'bold'}}>Produto: </Text>{product.name}</Text>
          <Text style={styles.productInfo}><Text style={{fontWeight: 'bold'}}>Preço: </Text>{product.preco}</Text>
          <Text style={styles.productInfo }><Text style={{fontWeight: 'bold', color: 'red'}}>Validade: </Text>{getCurrentDate(3)}</Text>
        </View>

        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btn} onPress={()=> Alert.alert('Voucher gerado com sucesso!')}>
              <Text>Gerar Voucher</Text>
          </TouchableOpacity>
          <Text>                    </Text>
          <TouchableOpacity style={styles.btn} onPress={()=>{}}>
            <Text>Continuar comprando</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}
export default QRCode; 