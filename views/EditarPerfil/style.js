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
    form:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        width: '100%',
    },
    form_Input:{
        backgroundColor: '#FFF',
        minWidth: 260,
        width: '65%',
        fontSize: 19,
        padding: 7,
        marginBottom: 30,
        textAlign:'center',
        borderRadius: 10,
    },
    darkbg:{
        backgroundColor: '#333',
    },

  });

export {css}