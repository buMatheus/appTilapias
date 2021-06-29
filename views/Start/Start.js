import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import {css} from './style';



export default function Home(props){
    return (
    <View style={css.container}>
        <View style={css.home}>
            <Text style={css.home_Titulo}>
                 Bem vindo ao
            </Text>
            <Text style={css.home_SubTitulo}>
                Tilápias Três Marias!
            </Text>
        </View>
        <View style={css.logoMarca}>
            <Image style={css.logoMarca_Img} source={require('../../assets/img/logo.png')} />
        </View>
        <View style={css.buttons}>
            <TouchableOpacity style={css.buttons_Button} onPress={() => props.navigation.navigate('Login')}>
                <Text style={css.buttons_Button_Text}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.buttons_Button} onPress={() => props.navigation.navigate('Singup')}>
                <Text style={css.buttons_Button_Text}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}