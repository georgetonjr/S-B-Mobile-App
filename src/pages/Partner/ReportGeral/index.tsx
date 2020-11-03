import React, {useContext, useState} from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import AuthContext from '../../../contexts/Auth';

import styles from './styles';

const ReportGeral: React.FC = () => {
  const {user, signOut} = useContext(AuthContext);
  const [nome, setNome] = useState(user.nome);
  const [razao, setRazao] = useState(user.Razao);
  const [cnpj, setCnpj] = useState(user.cnpj);
  const [isVisible, setIsVisible] = useState(false);

  const [data, setData] = useState([
    { id: "00", name: "Coca-Cola:", vendas: "   20" },
    { id: "01", name: "Tomate:   ", vendas: "     15" },
    { id: "02", name: "sabão:    ", vendas: "      35" },
  ])

  console.log(user)
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
          onPress={()=> setIsVisible(true)}
        >
          <Text style={styles.btnTxt}> Relatorio de vendas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
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

        <Image style={{alignSelf:'center' }}source={require('../../../assets/Screenshot_1.png')} />
        
        <TouchableOpacity style={styles.btn} onPress={() => setIsVisible(false)}>
          <Text style={styles.btnTxt}> Voltar</Text>
        </TouchableOpacity>
      </Modal>
      
    </View>
  );
}

export default ReportGeral;