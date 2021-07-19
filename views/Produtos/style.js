import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#333',
  },
  buttons:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#333',
  },
  buttons_Button:{
      width: '30%',
      padding: 12,
      backgroundColor: '#62bac0',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 30,
  },
  buttons_Button_Text:{
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 15,
      color: '#333',
  },
  adressList:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  adressList_row1:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  adressList_row1_atr1:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
  adressList_row1_atr2:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
  adressList_row2:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  adressList_row3:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  adressList_row3_atr1:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
  adressList_row3_atr2:{
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    width: '50%',
  },
  adressList_buttonText:{
    textAlign: 'center',
  },
});

export {css}