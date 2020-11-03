import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  },

  l: {
    marginRight: 265,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 16,
  },

  s: {
    marginRight: 265,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 16,
  },

  input: {
    width: 300,
    backgroundColor: '#EFF7FF',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    borderRadius: 10,
    marginBottom: 15,
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498fd',

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
    textAlign: 'center', // <-- the magic
    fontSize: 10,
    fontWeight: 'bold',
    width: 200,
  },

  botaoparceiro: {
    width: 300,
    height: 42,
    backgroundColor: '#131985',

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
  },

  botaotextcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
