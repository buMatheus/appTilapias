import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Start, Cadastro} from './views/Index';
import Home from './views/Home/Home';
import EditarPerfil from './views/EditarPerfil/EditarPerfil';
import Endereco from './views/Endereco';
import NovoEndereco from './views/Endereco/Create';
import TodosEnderecos from './views/Endereco/SearchAdress';


const Stack = createStackNavigator();
let blue = '#62bac0';
let black = '#333';
let white = '#FFF';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{
          title: 'Tela Inicial',
          headerShown:false,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
        <Stack.Screen name="Home" component={Home} options={{
          title: 'Painel de Controle',
          headerShown:true,
          headerLeft: false,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
        <Stack.Screen name="Login" component={Login} options={{
          title: 'Entrar no sistema',
          headerShown:true,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
        <Stack.Screen name="Singup" component={Cadastro} options={{
          title: 'Cadastrar no sistema',
          headerShown:true,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
        <Stack.Screen name="EditarPerfil" component={EditarPerfil} options={{
          title: 'Editar Perfil',
          headerShown:true,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
        <Stack.Screen name="Endereco" component={Endereco} options={{
          title: 'Endereços',
          headerShown:true,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
        <Stack.Screen name="NewAdress" component={NovoEndereco} options={{
          title: 'Novo Endereço',
          headerShown:true,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
        <Stack.Screen name="AllAdress" component={TodosEnderecos} options={{
          title: 'Todos Endereços',
          headerShown:true,
          headerStyle: {backgroundColor: blue},
          headerTintColor: black,
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center',
          }
        }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


