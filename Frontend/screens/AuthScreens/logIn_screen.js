import { Text, View, Image, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import logo from '../../images/LoginImage.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Logs } from 'expo'
import CustomInput from '../../components/customInput/customInput'
import { TapGestureHandler } from 'react-native-gesture-handler'
import CustomButton from '../../components/customButton/custom_button'




const LogScreen = ({ navigation }) => {

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



    return (
        <View style={styles.root}>
            <Image source={logo} resizeMode="contain" style={[styles.logo, { height: height * 0.5 }]} />
            <CustomInput placeholder='Email' value={username} setValue={setUsername} />
            <CustomInput placeholder='password' value={password} setValue={setPassword} secureTextEntry={true} />
            <TouchableOpacity onPress={onForgotPasswordPressed}><Text style={{ opacity: 0.7, fontSize: 15 }}>Forget Password? Click here</Text></TouchableOpacity>
            <CustomButton text='Sign In' onPress={onSignInPressed} />
            <TouchableOpacity onPress={onCreateAccountPressed}><Text style={{ opacity: 0.7, fontSize: 15, marginTop: 10, }}>Don't have an account? Create one </Text></TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 0,
    },

    logo: {
        marginBottom: 40,
        width: '90%',
        Maxwidth: 100,
        Maxheight: 300,
    }
})

export default LogScreen;