import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, Switch, TouchableOpacity, ScrollView } from 'react-native';
import {css} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config.json';




export default function AllProducts({navigation}){
    const [products, setProducts] = useState(null);
    const [id, setID] = useState(null);

    useEffect(()=>{
        verifyLogin();
    },[]);

    useEffect(()=>{
        getProducts();
        //setQtd(adress.length);
    },[id]);

    async function verifyLogin(){
        let response = await AsyncStorage.getItem('userNameData');
        let json = JSON.parse(response);
        if(json !== null){
            setID(json.id);
            
        }
    }

    async function getProducts(){
        let response = await fetch(`${config.urlRoot}allProducts`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            
        });
        let json = await response.json();

        if(json === 'failed'){
            console.log('Deu errado!');
        }else{
            console.log(json);
            setProducts(json);
        }
    }

    return (
        <View style={css.container}>
                { (products !== null) && (            
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
                        data={products}
                        renderItem={({item, index, separators}) => (
                            <View
                                style={css.adressList} 
                                key={index}
                                onShowUnderlay={separators.highlight}
                                onHideUnderlay={separators.unhighlight}
                                >
                                <View style={css.adressList_row1}>
                                    <Text style={css.adressList_row1_atr1}>
                                            {products[index].nome}
                                    </Text>
                                    <Text style={css.adressList_row1_atr2}>
                                            {products[index].valor}
                                    </Text>
                                </View>
                                <View style={css.adressList_row2}>
                                    <Text style={css.adressList_row2_atr1}>
                                        {products[index].descricao}
                                     </Text>
                                </View>
                                <View style={css.adressList_row4}>
                                    <TouchableOpacity
                                        style={css.adressList_row4_atr1}
                                        onPress = {()=> console.log('apertei')}
                                        >
                                        <Text style={css.adressList_buttonText}>
                                            Detalhes
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                        style={css.adressList_row4_atr2}
                                        onPress = {()=> console.log('apertei')}
                                    >
                                        <Text style={css.adressList_buttonText}>
                                            Deletar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => String(index)}
                    />      
                )}
                
        </View>
    );
}