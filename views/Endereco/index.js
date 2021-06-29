import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {css} from './style';



export default function Endereco({navigation}){
    return (
    <View style={css.container}>
        <View style={css.buttons}>
            <TouchableOpacity style={css.buttons_Button} onPress={() => navigation.navigate('NewAdress')}>
                <Text style={css.buttons_Button_Text}>Novo Endereço</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.buttons_Button} onPress={() => navigation.navigate('AllAdress')}>
                <Text style={css.buttons_Button_Text}>Editar Endereço</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
}