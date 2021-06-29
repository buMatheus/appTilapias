import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, BackHandler, Alert } from 'react-native';
import {css} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { set } from 'react-native-reanimated';


//tela de painel de controle do usuário mas também é home
export default function Home({navigation}){

    const [name, setName] = useState(null);
    const [id, setID] = useState(null);
    const [login, setLogin] = useState(null);

    useEffect(() => {
        const backAction = () => {
          Alert.alert("Gostaria de sair do aplicativo?", [
            {
              text: "Não",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sim", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

    useEffect(()=>{
        verifyLogin();
    },[]);


    async function verifyLogin(){
        let response = await AsyncStorage.getItem('userNameData');
        let json = JSON.parse(response);
        if(json !== null){
            setName(json.firstName);
            setID(json.id);
            setLogin(true);
        }
    }
    async function logout(){
        await AsyncStorage.clear();
        navigation.navigate('Start');
    }

    return (
    <View style={css.container}>
       
      <View style={css.controlPainel}>
        <View style={css.headerHome}>
            <Text style={css.fonteTitulo}>
                Olá {name}!
            </Text>
            <Text style={css.fonteSubTitulo}>
                Bem vindo ao aplicativo do Tilápias Três Marias
            </Text>
        </View>
        <TouchableOpacity
            style={css.button}
            onPress={() => navigation.navigate('EditarPerfil')}
        >
            <Text style={css.button_Text}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={css.button}
            onPress={() => navigation.navigate('Produtos')}
        >
            <Text style={css.button_Text}>Ver Produtos</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={css.button}
            onPress={() => navigation.navigate('Historico')}
        >
            <Text style={css.button_Text}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={css.button}
            onPress={() => navigation.navigate('Endereco')}
        >
            <Text style={css.button_Text}>Endereços Cadastrados</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={css.button}
            onPress={()=> logout()}
        >
            <Text style={css.button_Text}>Sair do aplicativo</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}