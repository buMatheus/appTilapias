import React, {useState, useEffect} from 'react';
import { Button, Platform , KeyboardAvoidingView , View, TextInput } from 'react-native';
import { css } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';
 
 export default function EditarPerfil({navigation}){
    
    const [firstName, setFirstName] = useState(null);
    const [id, setId] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [userName, setuserName] = useState(null);
    const [password, setpassword] = useState(null);
    
    useEffect(()=>{
        verifyLogin();
    },[]);

    async function verifyLogin(){
        let response = await AsyncStorage.getItem('userNameData');
        let json = JSON.parse(response);
        if(json !== null){
            setFirstName(json.firstName);
            setLastName(json.lastName);
            setEmail(json.email);
            setuserName(json.userName);
            setpassword(json.password);
            setId(json.id);
        }
    }

    async function sendForm(){
        let response = await fetch(`${config.urlRoot}updateUser`, {
            method: 'POST',
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                userName: userName,
                password: password,
                id: id,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            
        });
        let json = await response.json();

        if(json === 'failed'){
            console.log('Deu Errado Update');
        }else{
            await AsyncStorage.setItem('userNameData',  JSON.stringify(json));
            navigation.navigate('Home');


        }

    }
    

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}>
            {firstName && lastName && email && userName && password && id && (
                <View style={css.form}>
                    <TextInput
                    placeholder='Antônio'
                    onChangeText={text=>firstName(text)}
                    value={firstName}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Moreira'
                    onChangeText={text=>lastName(text)}
                    value={lastName}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='antonio88@gmail.com'
                    onChangeText={text=>setEmail(text)}
                    value={email}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Antonio88'
                    onChangeText={text=>setuserName(text)}
                    value={userName}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={text=>setPassword(text)}
                    value={password}
                    style={css.form_Input}
                    />
                    <Button onPress={()=> sendForm()} title="Editar" color="#62bac0"/>
                </View>
                )}
            
        </KeyboardAvoidingView>
    )
}