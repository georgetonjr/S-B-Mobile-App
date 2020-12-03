import React, {useState} from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {mask} from '../../../functions/Mask';
import {cpf} from 'cpf-cnpj-validator';
import {CustomerRegister} from '../../../functions/CustomerRegister';

import styles from './styles';

const Register: React.FC = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [name, setName] = useState('');
  const [ccpf, setCcpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [csenha, setCsenha] = useState('');
  const [isCpfValido, setIsCpfValido] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  function checkPass() {
    if (csenha !== '' && senha !== csenha) {
      Alert.alert('Senhas não coincidem!');
      setSenha('');
      setCsenha('');
    }
    if (senha.length < 8) {
      Alert.alert('Minimo de 8 caracteres');
    }
  }

  function validaCPF(e: string) {
    if (!cpf.isValid(e)) {
      setCcpf('');
      Alert.alert('Por favor digite um CPF valido');
      setIsCpfValido(false);
    }
    var e = mask.Cpf(ccpf);
    setCcpf(e);
    setIsCpfValido(true);
  }

  function mTel(tel: string) {
    tel = tel.replace(/\D/g, '');
    tel = tel.replace(/^(\d)/, '($1');
    tel = tel.replace(/(.{3})(\d)/, '$1)$2');
    if (tel.length === 9) {
      tel = tel.replace(/(.{1})$/, '-$1');
    } else if (tel.length === 10) {
      tel = tel.replace(/(.{2})$/, '-$1');
    } else if (tel.length === 11) {
      tel = tel.replace(/(.{3})$/, '-$1');
    } else if (tel.length === 12) {
      tel = tel.replace(/(.{4})$/, '-$1');
    } else if (tel.length > 12) {
      tel = tel.replace(/(.{4})$/, '-$1');
    }
    setTelefone(tel);
  }

  async function handleSubmit() {
    if (
      name === '' ||
      telefone === '' ||
      ccpf === '' ||
      email === '' ||
      senha === ''
    ) {
      Alert.alert('Por favor preencha todos os campos');
    } else if (!isSelected) {
      Alert.alert('É necessario aceitar os termos para finalizar o cadastro.');
    } else {
      if (isCpfValido) {
        CustomerRegister(name, telefone, ccpf, email, senha);
        setTimeout(() => {
          navigation.navigate('Sempre Mais Barato');
        }, 2000);
      } else
        Alert.alert('Por favor digite um cpf valido!')
    }
  }

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            placeholder="Nome"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>CPF</Text>
          <TextInput
            placeholder="000.000.000-00"
            keyboardType="numeric"
            style={styles.input}
            value={ccpf}
            onChangeText={setCcpf}
            maxLength={14}
            onBlur={() => {
              validaCPF(ccpf);
            }}
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            placeholder="Telefone"
            style={styles.input}
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
            onBlur={() => mTel(telefone)}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
            onBlur={checkPass}
          />
          <Text style={{marginLeft: '5%', fontWeight: 'bold'}}>A senha precisar ter no minimo 8 caracteres.</Text>

          <Text style={styles.label}>Confirmar senha</Text>
          <TextInput
            placeholder="Confirmar senha"
            style={styles.input}
            secureTextEntry={true}
            value={csenha}
            onChangeText={setCsenha}
            onBlur={checkPass}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              disabled={false}
              value={isSelected}
              onValueChange={(newValue) => setSelection(newValue)}
              style={styles.checkbox}
            />
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <Text style={styles.labelTermos}>Aceitar termos.</Text>
              </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
            <Text style={styles.botaotext}>Finalizar cadastro</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
      <Modal visible={isVisible}>
        <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>X</Text>
        </TouchableOpacity>
        <ScrollView>
          <Text style={{marginLeft: '1%'}}>I. Da adesão
O aplicativo S+B, foi criado por uma equipe de alunos, de forma independente. Os desenvolvedores do aplicativo S+B, e a pessoa física ou jurídica, denominada ASSINANTE, celebram o presente termo de adesão a utilização do aplicativo S+B sob as condições abaixo descritas.
II. Do objetivo
•	O aplicativo foi criado com foco nos pequenos e médios empreendedores que possuem seu negócio próprio e que queriam divulgar melhor suas ofertas.
•	O serviço oferecido pelo aplicativo na publicação, comparação e geração de voucher de compra, para ser utilizado, no estabelecimento, onde o ASSINANTE, pessoa física, se propõem a ir realizar a compra.
III. Do ambiente tecnológico
•	O aplicativo está homologado para aparelhos que rodem os sistemas operacionais Android.
IV. Dos planos e formas de pagamento
•	Para pessoa física, a utilização gratuita e ilimitada após a instalação em seu aparelho, criar uma conta no aplicativo e aceitar estes termos.
•	O valor dos serviços previstos neste contrato varia de acordo com o plano de assinatura MENSAL, TRIMESTRAL, SEMESTRAL ou ANUAL escolhido pelo ASSINANTE através do plano de assinatura no aplicativo.
•	O CNPJ é obrigatório e será utilizado para emissão do boleto bancário para a realização do pagamento da assinatura.
•	O pagamento da assinatura é realizado através de boleto bancário do Banco do Brasil.
•	Pagamentos por boleto bancário podem levar até 3 dias úteis para serem confirmados
•	O NÃO PAGAMENTO do boleto emitido para a regularização do seu plano de assinatura implicará no envio das informações para os orgãos competentes de restrição de crédito.
•	O pagamento não poderá ser realizado através de cartão de crédito no momento.
•	Cabe ao Protesto Nacional total responsabilidade sobre toda transação financeira.
•	A assinatura se iniciará no momento em que for solicitado o pedido de assinatura.
 
V. Do prazo
•	Este contrato é válido por prazo determinado e se inicia no momento em que o ASSINANTE solicita um pedido de plano de assinatura pelo aplicativo S+B, e o servidor enviar a notificação no aplicativo e termina após o transcorridos o número de dias previstos no plano de assinatura escolhido.
•	Os serviços objeto do presente contrato são prestados ao ASSINANTE de forma limitada dentro do plano de assinatura, de modo que o pagamento pelos serviços será crucial para o tempo de utilização mensalmente.
•	No caso de eventual interrupção dos serviços prestados causada por falhas técnicas nos servidores, o período de assinatura do ASSINANTE será prorrogado gratuitamente pelo mesmo período da interrupção na próxima contratação de assinatura.
VI. Do cancelamento
•	O cancelamento do serviço será executado quando o aplicativo for desinstalado.
– Para o cancelamento de pagamentos via boleto, o resgate seguirá as regras do Protesto Nacional.
VII. Da disponibilidade
•	A cada 30 dias, o aplicativo verificará o tempo de utilização, e poderá ficar indisponível caso o pagamento do boleto não for realizado e indentificado.
•	Tendo em vista as características inerentes ao ambiente da Internet, não têm como garantir que o acesso ao servidor S+B e Protesto Nacional, esteja livre de interrupções ou suspensões, ocasionadas por casos fortuitos, internos ou externos, casos de força maior ou por outros casos não inteiramente sujeitos ao controle da instituição, eximindo-a de qualquer responsabilidade proveniente de tais fatos e/ou atos.
VIII. Atendimento ao ASSINANTE
•	O ASSINANTE poderá entrar em contato através do formulário de contato no aplicativo, durante o horário comercial. 
IX. Disposições finais
•	Na vigência do contrato, o S+B poderá colocar ou retirar conteúdo no aplicativo do ASSINANTE, sem aviso prévio.
•	O serviço oferecido pelo S+B não inclui nenhum tipo de monitoria ao ASSINANTE.
•	O S+B não será responsável por quaisquer perdas ou danos que você venha a experimentar em decorrência do uso do aplicativo.
•	Este documento visa registrar a manifestação livre, informada e inequívoca pela qual o Titular concorda com o tratamento de seus dados pessoais para finalidade específica, em conformidade com a Lei nº 13.709 – Lei Geral de Proteção de Dados Pessoais (LGPD).
•	O ASSINANTE declara expressamente que está ciente e concorda com o termo de uso e a política de Privacidade.</Text>
        </ScrollView>
      </Modal>
    </>
  );
};

export default Register;
