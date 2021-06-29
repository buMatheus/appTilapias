import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Switch, TouchableOpacity, ScrollView } from 'react-native';
import {css} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';




export default function SearchAdress({navigation}){
    const [adress, setAdress] = useState(null);
    const [id, setID] = useState(null);
    const [enable, setEnable] = useState(true);
    const [disable, setDisable] = useState(false);

    useEffect(()=>{
        verifyLogin();
    },[]);

    useEffect(()=>{
        getEnderecos();
        //setQtd(adress.length);
    },[id]);

    async function verifyLogin(){
        let response = await AsyncStorage.getItem('userNameData');
        let json = JSON.parse(response);
        if(json !== null){
            setID(json.id);
            
        }
    }

    async function getEnderecos(){
        let response = await fetch(`${config.urlRoot}readAllAdress`, {
            method: 'POST',
            body: JSON.stringify({
                userId: id
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            
        });
        let json = await response.json();

        if(json === 'failed'){
            console.log('Deu errado!');
        }else{
            setAdress(json);
        }
    }


    function toggleSwitch(index){
        console.log('entrei');
        let cont = 0;
        console.log(index);
        let newadd = adress.map((item) => {
            if(item.id == index) {
                item.activity = true;
                return item
            }else{
                item.activity = false
                return item
            }
        })

        setAdress(newadd)
        // for(cont; cont < adress.length; cont++){
        //     if(index === adress.id){
        //         if(adress.activity === false){
        //             adress.activity = true;
        //             (previousState => !previousState);
        //         }else{
        //             adress.activity = false;
        //         }
        //     }
        // }
    }
    

    return (
        <View style={css.container}>
            <TouchableOpacity style={css.buttomSave}>
                <Text style={css.buttomSave_Text}>
                    Salvar Alterações
                </Text>
            </TouchableOpacity>
            <ScrollView>
            { (adress !== null) && (
                    <FlatList
                    style={css.list}
                    data={adress}
                    renderItem={({item, index}) => (
                        <View style={css.adressList} key={index}>
                            <View style={css.adressList_row1}>
                                <Text style={css.adressList_row1_atr1}>
                                    {adress[index].complemento}
                                </Text>
                                <Text style={css.adressList_row1_atr2}>
                                    {adress[index].numero}
                                </Text>
                            </View>
                            <View style={css.adressList_row2}>
                                <Text style={css.adressList_row2_atr1}>
                                    {adress[index].logradouro}
                                </Text>
                                <Text style={css.adressList_row2_atr2}>
                                    {adress[index].bairro}
                                </Text>
                            </View>
                            <View style={css.adressList_row3}>
                                <Text style={css.adressList_row3_atr1}>
                                    {adress[index].cidade}
                                </Text>
                                <Text style={css.adressList_row3_atr2}>
                                    {adress[index].estado}
                                </Text>
                            </View>
                            <View style={css.adressList_row4}>
                                <TouchableOpacity style={css.adressList_row4_atr1}>
                                    <Text style={css.adressList_buttonText}>
                                        Editar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={css.adressList_row4_atr2}>
                                    <Text style={css.adressList_buttonText}>
                                        Deletar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={css.adressList_row5}>
                                <Text>Ativo: </Text>
                                <Switch
                                    trackColor={{ false: "#BAB8B5", true: "#62bac0" }}
                                    thumbColor={adress[index].activity ? "#62bac0": "#BAB8B5" }
                                    ios_backgroundColor="#3e3e3e"
                                    onChange={() => toggleSwitch(adress[index].id)}
                                    value={adress[index].activity}
                                />
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => String(index)}
                />
                )}
            </ScrollView>
        </View>
    );
}