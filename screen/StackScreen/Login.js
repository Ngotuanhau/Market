import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Colors from '../../Component/Colors'

const { width, height } = Dimensions.get('window')

class Login extends Component {
    constructor(props) {
        super(props),
            this.state = {
                phonenumber: '',
                password: '',
            }
    }

    onlogin = () => {
        this.props.navigation.navigate('Tab')
    }

    onsignin = () => {
        this.props.navigation.navigate('SignIn')
    };

    onforgot = () => {
        this.props.navigation.navigate('Forgotpass')
    }

    render() {

        return (
            <ImageBackground style={styles.container}
                source={(require('../../hinhanh/BackGound/market.jpg'))}>

                <StatusBar hidden={true} />

                <TouchableWithoutFeedback style={styles.container}
                    onPress={Keyboard.dismiss}>
                    <View style={styles.container}>

                        <View style={{ top: 110, alignItems: 'center', position: 'absolute' }}>
                            <Text style={styles.Name}>
                                Ann Farm
                            </Text>
                            <View style={styles.Line}>
                            </View>
                        </View>

                        <View style={styles.Form}>

                            <View style={styles.content}>
                                <TextInput style={styles.textinput}
                                    returnKeyLabel='next'
                                    placeholder='Phone number'
                                    keyboardType='phone-pad'
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor={Colors.colortextInput}
                                    value={this.state.phonenumber}
                                    onChangeText={
                                        (phonenumber) => { this.setState({ phonenumber }) }
                                    }>
                                </TextInput>
                            </View>

                            <View style={styles.content}>
                                <TextInput style={styles.textinput}
                                    returnKeyLabel='go'
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    placeholderTextColor={Colors.colortextInput}
                                    underlineColorAndroid='transparent'
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    value={this.state.password}
                                    onChangeText={
                                        (password) => { this.setState({ password }) }
                                    }>
                                </TextInput>
                            </View>

                        </View>

                        <TouchableOpacity style={styles.fogot}
                            onPress={this.onforgot}
                        >
                            <Text style={styles.textforgot}>
                                Forgot your password!
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.login}
                            onPress={this.onlogin}
                        >
                            <Text style={styles.textlogin}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signin}
                            onPress={this.onsignin}
                        >
                            <Text style={styles.textsignin}>
                                SignIn
                            </Text>
                        </TouchableOpacity>

                    </View>
                </TouchableWithoutFeedback>

            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Name: {
        color: Colors.maincolor,
        fontSize: 70,
    },

    Line: {
        width: 250,
        height: 3,
        backgroundColor: Colors.maincolor,
        rotation: -5
    },

    Form: {
        width: width - 50,
        height: 150,
        justifyContent: 'center',
        marginTop: 150,
    },

    content: {
        paddingTop: 10,
        height: 60,
    },

    textinput: {
        width: width - 50,
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: Colors.maincolor,
        borderRadius: 24,
    },

    fogot: {
        left: -90
    },

    textforgot: {
        fontSize: 16,
        color: Colors.colortext
    },

    login: {
        height: 60,
        width: 120,
        backgroundColor: Colors.maincolor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 24
    },

    textlogin: {
        color: Colors.colortextInput,
        fontSize: 25,
    },

    signin: {
        paddingTop: 40,
    },

    textsignin: {
        color: Colors.colortext,
        fontSize: 18
    }
})

export default Login;