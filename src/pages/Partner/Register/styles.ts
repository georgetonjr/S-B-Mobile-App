import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  botaotext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },

  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  checkbox: {
    alignSelf: 'center',
    marginLeft: '3.8%',
  },

  labelTermos: {
    margin: 8,
  },
});
