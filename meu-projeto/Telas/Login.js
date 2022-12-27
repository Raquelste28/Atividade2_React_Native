import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from "react-native-elements";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Inicial({ navigation }) {
    return (
        <View style={styles.container}>

            <view>
                <Avatar
                    size={150}
                    rounded
                    icon={{ name: 'user', type: 'font-awesome', color: 'black' }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.9}
                    containerStyle={{ flex: 2, marginLeft: 20, marginTop: 115 }}
                />

            </view>

            <view>
                <Input
                    placeholder='login'
                />
            </view>
            <view>
                <Input
                    placeholder='senha'
                />
            </view>
            <view style={{ flex: 1, padding: 20 }}>
                <Button
                    title="Login"
                    buttonStyle={{ backgroundColor: '#1971e8' }}
                    containerStyle={{
                        height: 40,
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                />
            </view>

            <view style={{ flex: 5 }}>
                <Button
                onPress={()=>navigation.navigate('Usuário')}
                    title="Cadastre-se"
                    buttonStyle={{ backgroundColor: '#f71718' }}
                    containerStyle={{
                        height: 40,
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 2,
                    }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                />
            </view>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eae5e1',
        alignItems: 'center',
        justifyContent: 'center',


    },


});