import React, { useState } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

const RSale: React.FC = () => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [maxQuant, setMaxQuant] = useState('');
  const [validade, setValidade] = useState('');
  const [valor, setValor] = useState('');

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<string>('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(date.toISOString())
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const prod = { produto: "selecione" }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}> Cadastrar Promoção </Text> 
      </View>

      <View>
      <Text style={styles.label}>Selecione o produto</Text>
        <Picker
          style={{ height: 50, width: '90%', marginLeft: '4%', borderColor: '#000'}}
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
        <TouchableOpacity style={styles.label} onPress={showDatepicker}><Text>trocar data</Text></TouchableOpacity>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

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