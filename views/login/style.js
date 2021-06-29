import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    darkbg:{
      backgroundColor: '#333',
    },
    login__logoMarca__img:{
      height: 200,
    },
    login__logoMarca:{
      height: 200,
      marginBottom: 50,
    },
    login__msg:(text = 'none')=> ({
      fontWeight: 'bold',
      fontSize: 22,
      color: 'red',
      marginBottom: 15,
      marginTop: 5,
      display: text,
    }),
    login__form: {
      width: '80%',
    },
    login__input: {
      backgroundColor: '#FFF',
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
    },
    login__button:{
      padding: 12,
      backgroundColor: '#62bac0',
      alignSelf: 'center',
      alignItems:'center',
      borderRadius: 20,
      marginTop: 40,
      width: '30%',
    },
    login__buttonText: {
      fontWeight: 'bold',
      fontSize: 15,
      color: '#333',
    },

  });

export {css}