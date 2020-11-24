import React, { useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, Modal, Alert  } from 'react-native'
import AuthContext from '../../../contexts/Auth';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Loading from '../../../components/Loading';
import api from '../../../services/api.service';

const RProduct: React.FC = () => {
  const navigation = useNavigation();
  const [cod, setCod] = useState<string>('');
  const [fabricante, setFab] = useState<string>('');
  const [valor, setValor] = useState<string>('');
  const [quantestoque, setQProduto] = useState<string>('');
  const [descricaoprod, setDescricaoprod] = useState<string>('');
  const [tipo, setTipo] = useState<string>('');
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [img, setImg] = useState<any>({uri: 'https://productsb.blob.core.windows.net/productsbb/default.png'});
  const { user } = useContext(AuthContext);
  const [load, setLoad] = useState<Boolean>(false);
  const openImagePickerAsync = async(type: boolean) => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    if(type){
      let picture = await ImagePicker.launchCameraAsync({ base64: true, });
      setImg(picture);
    }
    else {
      let picture = await ImagePicker.launchImageLibraryAsync({ base64: true, });
      setImg(picture);
    }
  };

  async function Cadastrar() { 
    if (cod === '' ||
      valor === '' ||
      fabricante === '' ||
      quantestoque === ''
    ) {
      Alert.alert('Todos os campos devem ser preenchidos');
    } else {
      setLoad(true);
      api.post('/cadprod',
        {
          'image': `data:image/jpg;base64,${img.base64}`,
          'codigo': cod,
          tipo,
          valor,
          fabricante,
          quantestoque,
          parceiro: user?._id,
          mercado: user?.nome,
        }
      )
        .then(() => {
          setLoad(false);
          Alert.alert('Produto cadastrado com sucesso!!');
          navigation.navigate('Produtos')
        })
        .catch(() => {
          Alert.alert('Algo aconteceu, por favor tente novamente mais tarde');
          setLoad(false);
        })
    }
  };
  if (load) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}> Cadastrar Produto </Text> 
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Image source={{uri: img.uri}}
            style={styles.logo}
          />
        </TouchableOpacity>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={isVisible}
            onRequestClose={() => setIsVisible(false)}
          >
            <View style={styles.modalContent}>
              <Image source={{uri: img.uri}}
              style={styles.preview}
              />
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity
                onPress={()=>openImagePickerAsync(true)}
                style={styles.modalbtn}
              >
                <Text>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={()=>openImagePickerAsync(false)}
                style={styles.modalbtn}
              >
                <Text>Galeria</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={styles.modalbtn}
            >
              <Text>Voltar</Text>
            </TouchableOpacity>
        </Modal>

        <Text style={styles.txt}>Codigo</Text>
        <TextInput
          placeholder='Codigo do Produto'
          style={styles.input}
          value={cod}
          onChangeText={setCod}
          keyboardType="numeric"
        />

        <Text style={styles.txt}>Tipo</Text>
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

        <Text style={styles.txt}>Fabricante</Text>
        <TextInput
          placeholder='Fabricante'
          value={fabricante}
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
          value={quantestoque}
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

      </ScrollView>
      
    </View>
  );
}   
export default RProduct;