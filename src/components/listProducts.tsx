import React, {useState} from 'react';
import { View, ScrollView, Text, Image, StyleSheet, Alert, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from '../services/api.service';

const listProducts: React.FC = ({ data }: any) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [codigo, setCodigo] = useState<String>(String(data.codigo));
  const [fabricante, setFabricante] = useState<String>(data.fabricante);
  const [tipo, setTipo] = useState<String>(data.tipo);
  const [preco, setPreco] = useState<String>(data.valor);
  const [quantestoque, setQuantestoque] = useState<String>(data.quantestoque);
  const disabled = () => {
    if (codigo === data.codigo)
      return true;
    else
      return false;
  }

  const alterarDados = () => {
    if (
      fabricante === data.fabricante &&
      tipo === data.tipo &&
      preco === data.valor &&
      quantestoque === data.quantestoque
    ) {
      return;
    }else{
      api.post('/produto/update', {
        "_id": data._id,
        fabricante,
        tipo,
        valor: preco,
        quantestoque
      })
        .then(() => Alert.alert('Dados alterados com sucesso!') )
        .catch(error => console.log(error))
    }
  }

  const desativarProd = () => {
    api.post('produto/desativar', {
      "_id": data._id,
    })
      .then(res => console.log(res.data))
      .catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <View>
          <Image
            source={{ uri: data.img }}
            style={styles.image}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.fabricante}>{data.fabricante} </Text>
          <Text style={styles.preco}>R$ {data.valor}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        visible={isVisible}
      >
        <ScrollView>
          <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
            <Text style={{fontWeight: 'bold', fontSize: 22}}>X</Text>
          </TouchableOpacity>

          <Image
            source={{ uri: data.img }}
            style={{height: 150, width: 150, borderRadius: 100, alignSelf: 'center'}}
          />

          <Text style={styles.text}>codigo</Text>
          <TextInput style={styles.input} editable={false} value={`${codigo}`} onChangeText={setCodigo}></TextInput>

          <Text style={styles.text}>Fabricante</Text>
          <TextInput style={styles.input} value={`${fabricante}`} onChangeText={setFabricante}></TextInput>

          <Text style={styles.text}>Tipo</Text>
          <Picker
            style={{ height: 50, width: '90%', marginLeft: '4%', borderColor: '#000' }}
            onValueChange={(itemValue: any, itemIndex) => setTipo(itemValue)}
            selectedValue={tipo}
          >
            <Picker.Item label="Tipo" value="" />
            <Picker.Item label="Padaria" value="Padaria" />
            <Picker.Item label="Alimentos (cereais e grãos)" value="Alimentos (cereais e grãos)" />
            <Picker.Item label="Congelados e frios" value="Congelados e frios" />
            <Picker.Item label="Hortifrúti" value="Hortifrúti" />
          
          </Picker>

          <Text style={styles.text}>Preço</Text>
          <TextInput style={styles.input} value={preco} onChangeText={setPreco}></TextInput>

          <Text style={styles.text}>Estoque</Text>
          <TextInput style={styles.input} value={quantestoque} onChangeText={setQuantestoque}></TextInput>
          
          <TouchableOpacity
              style={{
                width: '45%',
                height: 40,
                backgroundColor: '#3498fd',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: '5%',
            }}
            onPress={alterarDados}
          >
            <Text style={{alignSelf: 'center', fontSize: 17, fontWeight: 'bold', color: '#fff'}}>Alterar dados</Text>
          </TouchableOpacity>

          <TouchableOpacity
              style={{
                width: '45%',
                height: 40,
                backgroundColor: '#3498fd',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 50,
                marginTop: '5%',
            }}
            onPress={desativarProd}
          >
            <Text style={{alignSelf: 'center', fontSize: 15, fontWeight: 'bold', color: '#fff'}}>Desativar/Ativar produto </Text>
          </TouchableOpacity>
           
          

        </ScrollView>
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
    marginLeft: '42 %',
    fontWeight: 'bold',
    fontSize: 17,
  },

  preco: {
    marginLeft: '42%',
    fontWeight: 'bold',
    fontSize: 15,

  },

  input: {
    width: '95%',
    height: 40,
    backgroundColor: '#EFF7FF',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    borderRadius: 10,
    alignSelf:'center'
  },

  text: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: '3%'
  },

});

export default listProducts;