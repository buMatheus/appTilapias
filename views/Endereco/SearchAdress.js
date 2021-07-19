import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Switch, TouchableOpacity, ScrollView } from 'react-native';
import {css} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';
import { TapGestureHandler } from 'react-native-gesture-handler';




export default function SearchAdress({navigation}){
    const [adress, setAdress] = useState(null);
    const [id, setID] = useState(null);

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

    async function deleteAdress(element){
        console.log(element)
        let response = await fetch(`${config.urlRoot}deleteAdress`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                id: element.id,
                activity: element.activity,
                userId: element.userId
            }),
        });
        let json = await response.json();
        if(json === 'success'){
            console.log('Deu Certo!');
            navigation.navigate('Endereco');
        }else{
            console.log((json))
            console.log('Deu certo!')
            navigation.navigate('Endereco');
        }
    }

    async function setActivity(){
        adress.forEach(element => {
            if(element.activity === true){
                let response = switchActivity(element);
                if(response == true){
                    return true;
                }else{
                    return false;
                }
            }
        });
    }
    async function switchActivity(element){
        let response = await fetch(`${config.urlRoot}updateAdressActivity`, {
            method: 'POST',
            body: JSON.stringify({
                userId: id,
                id: element.id,
                activity: element.activity,
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            
        });
        let json = await response.json();

        if(json === 'failed'){
            console.log('Deu Errado!');
            return false;
        }else{
            console.log('Deu Certo!');
            return true;
        }
    }


    function toggleSwitch(index){
        let cont = 0;
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
    }
    

    return (
        <View style={css.container}>
            <TouchableOpacity 
                style={css.buttomSave}
                onPress={() => setActivity()}
            >
                <Text 
                    style={css.buttomSave_Text}
                >
                    Salvar Alterações
                </Text>
            </TouchableOpacity>
                { (adress !== null) && (            
                    <FlatList
                        ItemSeparatorComponent={
                            Platform.OS !== 'android' &&
                            (({ highlighted }) => (
                            <View
                                style={[
                                style.separator,
                                highlighted && { marginLeft: 0 }
                                ]}
                            />
                            ))
                        }
                        style={css.list}
                        data={adress}
                        renderItem={({item, index, separators}) => (
                            <View
                                style={css.adressList} 
                                key={index}
                                onShowUnderlay={separators.highlight}
                                onHideUnderlay={separators.unhighlight}
                                >
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
                                    <TouchableOpacity
                                        style={css.adressList_row4_atr1}
                                        onPress = {()=> navigation.navigate('updateAdress', {adress: adress[index]})}
                                        >
                                        <Text style={css.adressList_buttonText}>
                                            Editar
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        style={css.adressList_row4_atr2}
                                        onPress = {()=> deleteAdress(adress[index])}
                                    >
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
                
        </View>
    );
}