import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  aviso: {
    marginTop: 70,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center'
  },

  logo: {
    marginTop:60,
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
  },

  txt: {
    marginTop: 15,
    marginBottom:1,
    marginLeft: 45,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize:15
  },

  input: {
    width: 400,
    height: 40,
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    borderRadius: 6,
    alignSelf: 'center'
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498fd',
    marginTop: 25,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "center",
  },
  
});