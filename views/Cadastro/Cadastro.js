import React from 'react';
import { Text, Button, Platform , KeyboardAvoidingView , View, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { css } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
 
 export default function Cadastro(props){
    async function sendForm(values){
        let response = await fetch('http://192.168.1.105:3000/createUser', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                userName: values.userName,
                password: values.password,
            })
        });
        let json = await response.json();
        if(json === 'failed'){
            await AsyncStorage.clear();
        }else{
            const jsonValue = JSON.stringify(values.userName);
            await AsyncStorage.setItem('userNameData', jsonValue);
            props.navigation.navigate('Home');
        }
    }
    

    return (
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '', 
                    email: '', 
                    userName: '',
                    password: '',
                    
                }}
                onSubmit={values => sendForm(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={css.form}>
                    <TextInput
                    placeholder='Antônio'
                    onChangeText={handleChange('firstName')}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Moreira'
                    onChangeText={handleChange('lastName')}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='antonio88@gmail.com'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Antonio88'
                    onChangeText={handleChange('userName')}
                    onBlur={handleBlur('userName')}
                    value={values.userName}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Senha'
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    style={css.form_Input}
                    />
                    <Button onPress={handleSubmit} title="Cadastrar" color="#62bac0"/>
                </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    )
}