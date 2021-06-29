import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    controlPainel: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#333',
        width: '100%',
        height: '100%',
        padding: 30
    },
    button: {
      minWidth: '55%',
      height: '5%',
      justifyContent: 'center',
      alignItems: "center",
      textAlign: 'center',
      backgroundColor: '#62bac0',
      margin: 20,
      borderRadius: 10,
    },
    button_Text:{
        color: '#333',
        fontWeight:'bold',
        fontSize: 16,
    },
    headerHome: {
      width: 'auto',
      height: 'auto',
      alignItems: "center",
      textAlign: 'center',
      marginBottom: '35%',
    },
    fonteTitulo: {
        color:'#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    fonteSubTitulo: {
        color:'#FFF',
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 14,
    },
})
export {css};