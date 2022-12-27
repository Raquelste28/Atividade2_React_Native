import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from './Telas/Login';
import Secundaria from './Telas/CadastroUsuario';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator routeInicial="Inicial">
        <Stack.Screen name="Início" component={Inicial} />
        <Stack.Screen name="Usuário" component={Secundaria}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;