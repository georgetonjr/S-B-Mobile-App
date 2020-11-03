import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Button, SafeAreaView, TextInput, Image, ScrollView} from 'react-native';

import api from '../../../services/api.service';
import styles from './styles';
import AuthContext from '../../../contexts/Auth';

const Product: React.FC = () => {
  const {signOut} = useContext(AuthContext);
  const [cod, setCod] = useState('');
  const [fab, setFab] = useState('');
  const [valor, setValor] = useState('');
  const [qProduto, setQProduto] = useState('');
  const [descricaoprod, setDescricaoprod] = useState('');

  const [produtos, setProdutos] = useState([])

  useEffect(() =>{ 
    const prodd =  api.get('/getprod').then(e => setProdutos(e.data))
  }, [])
  async function prod() {
    
  }
  return(
    <SafeAreaView >
      <View style={styles.Prod}>
        <Text style={styles.text}> Produtos </Text>

      </View>

      <View>
      <Text style={styles.txt}>Pesquisar</Text>
      <TextInput
        placeholder='Digite o nome do Produto'
        style={styles.input}
        value={cod}
        onChangeText={setCod}
      />
      </View>

      <ScrollView>
        <View style={{ flex: 1}}>
          <Image style={styles.prodImage} source={{uri:'https://www.teclasap.com.br/wp-content/uploads/2011/10/coke-2.jpg'}}/>
          <Text style={{ fontWeight: 'bold', fontSize: 16, }}>Supercei </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 16}}>Coca-Cola Lata: 350ml</Text>
          <Text style={{ fontWeight:'bold', fontSize:16 }}>R$ 3,49</Text>
        </View>


        <View style={{flexDirection:'row'}}>
          <Image style={styles.prodImage} source={{uri:'https://www.ambev.com.br/conteudo/uploads/2019/03/pepsi_350ml.png'}}/>
          <Text style={{fontWeight:'bold', fontSize:16, alignSelf:'flex-end'}}>Supercei</Text>
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 ,marginRight: 229 }}>Pepsi Lata: 350ml</Text>
          <Text style={{ alignSelf:'center', fontWeight:'bold', fontSize:16 }}>R$ 3,19</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <Image style={styles.prodImage} source={{uri:'https://www.teclasap.com.br/wp-content/uploads/2011/10/coke-2.jpg'}}/>
          <Text style={{fontWeight:'bold', fontSize:16, alignSelf:'flex-end'}}>Superbom</Text>
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16, marginLeft:'0%'}}>Coca-Cola Lata: 350ml</Text>
          <Text style={{ alignSelf:'center', fontWeight:'bold', fontSize:16 }}>R$ 3,69</Text>
        </View>


        <View style={{flexDirection:'row'}}>
          <Image style={styles.prodImage} source={{uri:'https://www.ambev.com.br/conteudo/uploads/2019/03/pepsi_350ml.png'}}/>
          <Text style={{fontWeight:'bold', fontSize:16, alignSelf:'flex-end'}}>Superbom</Text>
          <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 ,marginRight: 219 }}>Pepsi Lata: 350ml</Text>
          <Text style={{ alignSelf:'center', fontWeight:'bold', fontSize:16 }}>R$ 3,09</Text>
        </View>

      </ScrollView>

    </SafeAreaView>
    

  );
};
export default Product;
