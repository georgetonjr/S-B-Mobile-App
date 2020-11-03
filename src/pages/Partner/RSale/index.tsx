import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import styles from './styles';

const RSale: React.FC = () => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [maxQuant, setMaxQuant] = useState('');
  const [validade, setValidade] = useState('');
  const [valor, setValor] = useState('');
  const prod = { produto:"selecione"  }
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}> Cadastrar Promoção </Text> 
      </View>

      <View>
      <Text style={styles.label}>Selecione o produto</Text>
        <Picker
          style={{ height: 50, width: 350, marginLeft: 60, borderColor: '#000' }}
        >
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="pão" value="pao" />
        </Picker>

        <Text style={styles.label}>Valor Promocional</Text>
        <TextInput
          placeholder='Preço Promocional'
          style={styles.input}
          keyboardType='number-pad'
          value={valor}
          onChangeText={setValor}
        />

        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          placeholder='Digite a quantidade de produtos que ficarão em promoção'
          style={styles.input}
          keyboardType='numeric'
          value={quantidade}
          onChangeText={setQuantidade}
        />

        <Text style={styles.label}>Maximo por cliente</Text>
        <TextInput
          placeholder='Quantidade maxima de produtos por cliente'
          style={styles.input}
          keyboardType='numeric'
          value={maxQuant}
          onChangeText={setMaxQuant}
        />

        <Text style={styles.label}>Validade da Promoção</Text>
        <TextInput
          placeholder='xx/xx/xxxx'
          style={styles.input}
        />

      </View>

      <View style={{marginTop:15}}>
        <TouchableOpacity
          style={styles.botao}
          
        >
          <Text style={styles.botaotext}>Cadastrar Promoção</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
export default RSale;