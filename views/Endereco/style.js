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
    form:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      backgroundColor: '#333',

    },
    form_Input:{
      textAlign: 'center',
      marginBottom: 10,
      minWidth: '80%',
      minHeight: 40,
      backgroundColor: '#FFF',
      borderRadius: 10,
    },
    form_SelectArea:{
      display: 'flex',
      width: '80%',
      height: 40,
      alignSelf: 'center',
      marginBottom: 15, 
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 10,
    },
    form_Select:{
      display: 'flex',
      flexDirection: 'row',
      width: '80%',
      height: 50,
      alignItems: 'center',
      zIndex: 100,
    },
    list:{
      display: 'flex',
      flex: 2,
      flexDirection: 'row',
      marginTop: 20,
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
    adressList_row2_atr1:{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      width: '50%',
    },
    adressList_row2_atr2:{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      width: '50%',
      
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
    adressList_row4:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      marginTop: 10,
      padding: 10,
    },
    adressList_row4_atr1:{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      width: '40%',
      alignSelf: 'center',
      backgroundColor: '#62bac0',
    },
    adressList_row4_atr2:{
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      width: '40%',
      backgroundColor: 'red',
    },
    adressList_buttonText:{
      textAlign: 'center',
    },
    buttomSave:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '30%',
      height: '5%',
      backgroundColor: '#62bac0',
      borderRadius: 10,
      marginTop: 20,
      marginBottom: 20,
    },
    buttomSave_Text:{
      textAlign: 'center',

    },
  });

export {css}