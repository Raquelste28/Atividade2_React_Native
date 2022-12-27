import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Secundaria({ navigation }) {
  return (
    <View style={styles.container}>

      <view >
        <Input
          placeholder='Email'
        />
      </view>
      <view>
        <Input placeholder="Senha" secureTextEntry={true} />

        <Button
          title="Salvar"
          buttonStyle={{ backgroundColor: '#1971e8' }}
          titleStyle={{ color: 'white' }}

        />
      </view>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


  },
}

);