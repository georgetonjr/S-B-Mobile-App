import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker';

import styles from './styles';
import api from '../../../services/api.service';

const RProduct: React.FC = () => {
  const [cod, setCod] = useState('');
  const [fab, setFab] = useState('');
  const [valor, setValor] = useState('');
  const [qProduto, setQProduto] = useState('');
  const [descricaoprod, setDescricaoprod] = useState('');

  async function Cadastrar() { 
    const res = await api.post('/cadprod', {
      img:"https://www.teclasap.com.br/wp-content/uploads/2011/10/coke-2.jpg",
      codigo:"1150",
      valor: "3.5",
      fabricante:"coca-cola",
      quantestoque:"150", 
      parceiro:"5f860bcf11b44e2b8cbc297e"
    })
    console.log(res)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.aviso}> Cadastrar Produto </Text>

      <Image source={require('../../../assets/products/coke.jpg')}
        style={styles.logo}
      />

      <Text style={styles.txt}>Codigo</Text>
      <TextInput
        placeholder='Codigo do Produto'
        style={styles.input}
        value={cod}
        onChangeText={setCod}
      />

      <Text style={styles.txt}>Tipo</Text>
      <Picker
        style={{height: 50, width: 350, marginLeft: 60, borderColor: '#000'}}
      >
        <Picker.Item label="Padaria" value="Padaria" />
        <Picker.Item label="Alimentos (cereais e grãos)" value="Alimentos (cereais e grãos)" />
        <Picker.Item label="Congelados e frios" value="Congelados e frios" />
        <Picker.Item label="Hortifrúti" value="Hortifrúti" />
        
      </Picker>

      <Text style={styles.txt}>Fabricante</Text>
      <TextInput
        placeholder='Fabricante'
        value={fab}
        onChangeText={setFab}
        style={styles.input}
      />

      <Text style={styles.txt}>Descrição</Text>
      <TextInput
        placeholder='Descrição do produto'
        value={descricaoprod}
        onChangeText={setDescricaoprod}
        style={styles.input}
      />

      <Text style={styles.txt}>Quantidade</Text>
      <TextInput
        placeholder='Quantide de Produto'
        keyboardType='numeric'
        value={qProduto}
        onChangeText={setQProduto}
        style={styles.input}
      />

    <Text style={styles.txt}>Valor</Text>
      <TextInput
        placeholder='Valor do Produto'
        keyboardType='numeric'
        style={styles.input}
        value={valor}
        onChangeText={setValor}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={Cadastrar}
      >
        <Text >Finalizar cadastro</Text>
      </TouchableOpacity>
      
    </View>
  );
}
    
export default RProduct;