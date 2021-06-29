import React, {useState, useEffect} from 'react';
import { Text, Image, Platform , KeyboardAvoidingView , View, TextInput, TouchableOpacity } from 'react-native';
import {css} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';

export default function Login(props){

    const [message, setMessage] = useState('none');
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    async function sendForm(){
        let response = await fetch(`${config.urlRoot}login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                password: password,
            })
        });
        let json = await response.json();
        if(json === 'failed'){
            setMessage('flex');
            setTimeout(()=>{
                setMessage('none');
            }, 5000);
            await AsyncStorage.clear();
        }else{
            await AsyncStorage.setItem('userNameData',  JSON.stringify(json));
            props.navigation.navigate('Home');
        }
    }


    return(
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}>
            <View style={css.login__logoMarca}>
                <Image style={css.login__logoMarca__img} source={require('../../assets/img/logo.png')} />
            </View>
            <View>
                <Text style={css.login__msg(message)}>
                    Usuário ou senha inválidos
                </Text>
            </View>
            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuario' onChangeText={text=>setUserName(text)} />
                <TextInput style={css.login__input} placeholder='Senha' secureTextEntry={true} onChangeText={text=>setPassword(text)} />
                
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
    );
}