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
    marginLeft: '5%',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize:15
  },

  input: {
    width: '90%',
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

  modal: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },

  modalContent: {
    marginBottom:100
  },

  modalbtn: {
    width: 150,
    height: 42,
    backgroundColor: '#3498fd',
    marginTop: 10,
    borderRadius: 4,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  
  preview: {
    marginTop: 35,
    width: 225,
    height: 225,
    borderRadius: 10,
    alignSelf: 'center',
  },
  
});