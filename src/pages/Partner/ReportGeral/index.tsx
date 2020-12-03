import React, {useContext, useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal, FlatList, Alert } from 'react-native';
import AuthContext from '../../../contexts/Auth';
import api from '../../../services/api.service';
import ListReport from '../../../components/listReport';

import styles from './styles';

const ReportGeral: React.FC = () => {
  const {user, signOut} = useContext(AuthContext);
  const [nome, setNome] = useState<any>(user.nome);
  const [razao, setRazao] = useState<any>(user.Razao);
  const [cnpj, setCnpj] = useState<any>(user.cnpj);
  const [isVisible, setIsVisible] = useState(false);
  const [vouchers, setVouchers] = useState<any>(true);
  var contador = 1;

  const getVoucher = () => {
    api.get('/voucher/getpartnerreport', { headers: { '_id': user?._id } })
      .then(response => {
        setVouchers(response.data);
      })
      .catch(error => console.error(error))
  };
  
  React.useEffect((): void => {
    (function () {
      getVoucher()
    })
    ()
  }, [vouchers]);


  return (
    <View>

      <View style={styles.header}>
        <Text style={styles.text}> Minha Conta </Text> 
      </View>

      <View style={styles.account}>
        <Image style={styles.picture} source={require('../../../assets/perfil.png')} />
        <Text style={styles.label}> {nome}</Text>
      </View>

      <View>
        <Text style={styles.txt}>Razão Social</Text>
        <TextInput
          placeholder={razao}
          style={styles.input}
        />

        <Text style={styles.txt}>CNPJ</Text>
        <TextInput
          value={cnpj}
          style={styles.input}
        />  
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setIsVisible(true)
            getVoucher();
          }}
        >
          <Text style={styles.btnTxt}> Relatorio de vendas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Dados alterados com sucesso!')}>
          <Text style={styles.btnTxt}> Alterar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={signOut}>
          <Text style={styles.btnTxt}> Sair</Text>
        </TouchableOpacity>

      </View>

      <Modal
        visible={isVisible}
        animationType="slide"
      >
        <Text style={{alignSelf:'center' ,marginTop:'3%',fontSize: 20, fontWeight:'bold', marginBottom: '4%'}}> Relatorio de Vendas</Text>
        
        <FlatList
        data={vouchers}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <ListReport
            data={item}
          />
        )}
        ItemSeparatorComponent={ () => <Separator/>}
      />

        <TouchableOpacity style={styles.btn} onPress={() => setIsVisible(false)}>
          <Text style={styles.btnTxt}> Voltar</Text>
        </TouchableOpacity>
      </Modal>
      
    </View>
  );
}

const Separator = () => <View style={{flex:1, height: 1, backgroundColor: '#3498fd' }}/>
export default ReportGeral;