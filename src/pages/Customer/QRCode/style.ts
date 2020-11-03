import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    width: '100%',
    height:40 ,
    backgroundColor: '#fff',
    fontFamily:'sans-serif',
    fontWeight: 'bold',
    borderRadius: 2
  },
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
  
  prodImage:{
    marginTop:5,
    width: 150,
    height: 150,
    borderRadius: 200,
    marginBottom: '8%',
    alignSelf: 'center'
  },

  product: {
    marginBottom: '15%'
  },

  productInfo: {
    fontSize: 16,
    marginLeft: '22%',
    marginBottom: 2
  },

  btnView: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  btn: {
    alignItems: 'center',
    justifyContent:'center',
    width: 150,
    height: 42,
    backgroundColor: '#3498fd',
    borderRadius: 6,
  },


});