import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';


function HomeScreen({ Navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => Navigation.navigate('Inicial')}
        title="Tela Inicial"
      />
    </View>
  );
}

function InicialScreen({ Navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Inicial Screen </Text>
      <Button
        onPress={() => Navigation.navigate('Home')}
        title="Tela home" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Inicial" component={InicialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
