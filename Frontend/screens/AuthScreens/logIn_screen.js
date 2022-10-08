import { Text, View, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../../components/customInput/customInput'
import CustomButton from '../../components/customButton/custom_button'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { SafeAreaView } from 'react-native-safe-area-context'



const LogScreen = ({ navigation }) => {


    let [fontLoaded] = useFonts({
        Alka: require('../../assets/fonts/Alkalami-Regular.ttf')

    })

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();


    const onSignInPressed = () => {
        navigation.navigate('Tab')
    }

    const onForgotPasswordPressed = () => {
        navigation.replace('ForgetpasswordScreen')
    }
    const onCreateAccountPressed = () => {
        navigation.replace('SigninScreen')
    }

    if (!fontLoaded) {
        return (
            null
        )
    }
    else {
        return (
            <SafeAreaView>
                <View style={styles.root}>
                    <Text style={{ fontFamily: 'Alka', fontWeight: '200', fontSize: 60, marginBottom: 20, marginTop: 20 }}>Sign In</Text>

                    <CustomInput placeholder='Email' value={username} setValue={setUsername} />
                    <CustomInput placeholder='password' value={password} setValue={setPassword} secureTextEntry={true} />
                    <TouchableOpacity onPress={onForgotPasswordPressed}><Text style={{ opacity: 0.7, fontSize: 15 }}>Forget Password? Click here</Text></TouchableOpacity>
                    <CustomButton text='Sign In' onPress={onSignInPressed} />
                    <TouchableOpacity onPress={onCreateAccountPressed}><Text style={{ opacity: 0.7, fontSize: 15, marginTop: 10, }}>Don't have an account? Create one </Text></TouchableOpacity>


                </View>
            </SafeAreaView>
        )
    }

}



const styles = StyleSheet.create({
    root: {

        alignItems: 'center',
        padding: 0,
    },

    logo: {
        height: 200,
        width: '100%',
        backgroundColor: 'red'

    }
})

export default LogScreen;


