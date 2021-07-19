import React, {useState, useEffect} from 'react';
import { Text, Button, Platform , KeyboardAvoidingView , View, TextInput, TouchableOpacity } from 'react-native';
import { css } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';
import {Picker} from '@react-native-picker/picker';
 
 export default function Update({route, navigation}){
    const { adress } = route.params;
    const [id, setId] = useState('');
    const [CEP, setCep] = useState('');
    const [localidade, setLocalidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [userId, setUserId] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [uf, setUf] = useState('');

    const [login, setLogin] = useState(false);
    const [inputState, setInputState] = useState(true);

    function onBlurCep(){
        const Cep = CEP?.replace(/[^0-9]/g, '');
        fetch(`https://viacep.com.br/ws/${Cep}/json/`).then(res => res.json()).
        then(data =>{
            setUf(data.uf);
            setLocalidade(data.localidade);
            setBairro(data.bairro);
            setLogradouro(data.logradouro);
            setInputState(true);
        }).catch(err => {
            console.log(err);
        });
    }


    
    
    useEffect(()=>{
        verifyLogin();
        initialValues();
    },[]);

    async function verifyLogin(){
        let response = await AsyncStorage.getItem('userNameData');
        let json = JSON.parse(response);
        if(json !== null){
            setUserId(json.id);
            setLogin(true);
        }
    }

    async function initialValues(){
        setId(adress.id);
        setCep(adress.cep);
        setUf(adress.uf);
        setLocalidade(adress.cidade);
        setBairro(adress.bairro);
        setLogradouro(adress.logradouro);
        setNumero(adress.numero);
        setComplemento(adress.complemento);
        if(adress.cidade === localidade){
            return true
        }else{
            return false
        }
    }

    async function sendForm(){
        let response = await fetch(`${config.urlRoot}updateAdress`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id: id,
                cep: CEP,
                uf: uf,
                cidade: localidade,
                bairro: bairro,
                logradouro: logradouro,
                numero: numero,
                complemento: complemento,
                activity: true,
                userId: userId
            }),
            
            
        });
        let json = await response.json();
        if(json === 'failed'){
            console.log('Deu errado!');
        }else{
            console.log('Deu certo!')
            navigation.navigate('Endereco');
        }
    }
    

    return (
        
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={[css.container, css.darkbg]}>
            {(login !== false) && (
                <View style={css.form}>
                    <TextInput
                    editable={inputState}
                    value={CEP}
                    placeholder='99.999-999'
                    onChangeText={cep=>setCep(cep)}
                    onBlur={()=>onBlurCep()}
                    style={css.form_Input}
                    />
                    <View style={css.form_SelectArea}>
                        <Picker
                            enabled={inputState}
                            mode='dropdown'
                            style={css.form_Select}
                            selectedValue={uf}
                            onValueChange= {(itemValue, itemIndex) =>
                                setUf(itemValue)
                            }
                        >
                            <Picker.Item label='UF' value='' />
                            {[
                                'AC', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB',
                                'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'
                            ].map((item, index) => (
                            <Picker.Item key={index} label={item} value={item}/>
                            ))}
                        </Picker>
                    </View>
                    
                    <TextInput
                    editable={inputState}
                    placeholder='Cidade'
                    value={localidade}
                    onChangeText={cidade=>setLocalidade(cidade)}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Bairro'
                    onChangeText={bairro=>setBairro(bairro)}
                    value= {bairro}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Logradouro'
                    onChangeText={logradouro =>setLogradouro(logradouro)}
                    value= {logradouro}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Numero'
                    onChangeText={numero => setNumero(numero)}
                    value= {numero}
                    style={css.form_Input}
                    />
                    <TextInput
                    placeholder='Complemento'
                    onChangeText={complemento => setComplemento(complemento)}
                    value= {complemento}
                    style={css.form_Input}
                    />
                    <Button onPress={()=>sendForm()} title="Atualizar" color="#62bac0"/>
                </View>
            )}
        </KeyboardAvoidingView>
        
    )
}