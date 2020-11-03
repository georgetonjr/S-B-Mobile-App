import {StyleSheet} from 'react-native';

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
  
  account: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '3%',
  },

  
  picture: {
    height: 150,
    width: 150,
    borderRadius: 100
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold'
  }

});