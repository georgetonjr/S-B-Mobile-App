import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    borderColor: '#000',
    backgroundColor:'#3498fd',
    borderRadius:2,
  },

  text: {
    marginTop:45,
    alignSelf:'center',
    fontSize: 25,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color:'#fff',
    
  },

  input: {
    width: 380,
    backgroundColor: '#fff',
    fontFamily:'sans-serif',
    fontWeight: 'bold',
    borderRadius: 10,
    marginLeft: 60,
    marginTop:10

  },

  label: {
    marginTop:5,
    marginLeft: 60,
    fontSize: 18,
    fontWeight:"bold",
    fontFamily: 'sans-serif',
  },
  
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#3498fd',
    marginTop: 10,
    borderRadius: 4,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  botaotext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },

  avisotext: {
    textAlign: 'center', // <-- the magic
    fontSize: 10,
    marginTop: 6,
    width: 200,
  },

});