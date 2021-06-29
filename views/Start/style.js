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
    home:{
        marginTop: '20%',
        width: 'auto',
        height: 'auto',
        alignItems: "center",
        textAlign: 'center',
    },
    home_Titulo:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 15,
    },
    home_SubTitulo:{
        color: '#FFF',
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 14,
    },
    logoMarca:{
        marginTop: 50,
        height: 200,
    },
    logoMarca_Img:{
        height: 200,
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
        fontSize: 15,
        color: '#333',
    }

  });

export {css}