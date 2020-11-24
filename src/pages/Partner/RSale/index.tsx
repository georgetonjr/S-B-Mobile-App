import React, { useState, useContext, useEffect } from 'react';
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Platform, Alert } from 'react-native';
import AuthContext from '../../../contexts/Auth';
import api from '../../../services/api.service';
import Loading from '../../../components/Loading';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

const RSale: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState<any>();
  const [load, setLoad] = useState<Boolean>(true);
  const [productSelected, setProductSelected] = useState<any>();
  const [quantidade, setQuantidade] = useState('');
  const [maxQuant, setMaxQuant] = useState('');
  const [validade, setValidade] = useState('');
  const [valor, setValor] = useState('');
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState<string>('date');
  const [show, setShow] = useState(false);

  const attProductList = () => {
    api.get('/getprodpartner', { headers: {id: user?._id} }) 
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
    
  }

  const limparCampos = () => {
    setProductSelected('');
    setQuantidade('');
    setMaxQuant('');
    setValor('');
  }

  const cadastrarPromocao = () => {
    api.post('/promocao/create', {
      parceiro: user?._id,
      produto_id: productSelected,
      estoque: quantidade,
      valor,
      maxpcliente: maxQuant,
      validade: date,
    })
      .then(response => {
        limparCampos()
        Alert.alert('Promoção cadastrada com sucesso!');
      })
      .catch(err => console.error(err));
  }

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

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
        <Text style={styles.text}> Cadastrar Promoção </Text> 
      </View>

      <View>
      <Text style={styles.label}>Selecione o produto</Text>
        <Picker
          onValueChange={(itemValue: any, itemIndex: any) => setProductSelected(itemValue)}
          selectedValue={productSelected}
          style={{ height: 50, width: '90%', marginLeft: '4%', borderColor: '#000'}}
        >
          {products !== undefined ? products.map((e: any) => <Picker.Item key={e._id}  label={e.fabricante} value={e._id} />) : <Picker.Item label="Selecione" value="Selecione" />}
        </Picker>

        <Text style={styles.label}>Valor Promocional</Text>
        <TextInput
          placeholder='R$ 0,00'
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
          onPress={cadastrarPromocao}
        >
          <Text style={styles.botaotext}>Cadastrar Promoção</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
}
export default RSale;