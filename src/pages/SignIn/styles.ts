import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center'
  },

  label: {
    marginTop: 15,
    marginBottom:1,
    marginLeft: '5%',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize:15
  },

  input: {
    width: '90%',
    height: 40,
    backgroundColor: '#EFF7FF',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    borderRadius: 6,
    alignSelf:'center'
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498fd',
    alignSelf:'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaotext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  avisotext: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    width: 200,
    alignSelf:'center',
  },

  botaoparceiro: {
    width: 300,
    height: 42,
    backgroundColor: '#131985',
    alignSelf:'center',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaotextpar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  botaoconsumidor: {
    width: 300,
    height: 42,
    backgroundColor: '#26044d',
    marginBottom: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', 
    marginTop: '5%'
  },

  botaotextcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
