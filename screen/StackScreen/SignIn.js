import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Dimensions,
    StatusBar,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
    Alert
} from 'react-native';

import Colors from '../../Component/Colors'

const { height, width } = Dimensions.get('window')

class SignIn extends Component {
    constructor(props) {
        super(props),
            this.state = {
                name: '',
                phonenumber: '',
                password: '',
            }
    }

    onsignin = () => {
        Alert.alert(
            'Message',
            'SignIn is success!!!',
            [
                { text: 'OK', onPress: () => { this.props.navigation.navigate('Login') } }
            ]
        )
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                source={(require('../../hinhanh/BackGound/market.jpg'))}>

                <StatusBar hidden={true} />

                <TouchableWithoutFeedback style={styles.container}
                    onPress={Keyboard.dismiss} >
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
                                    placeholder='User name'
                                    placeholderTextColor={Colors.colortextInput}
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    underlineColorAndroid='transparent'
                                    value={this.state.name}
                                    onChangeText={
                                        (name) => { this.setState({ name }) }
                                    } />

                            </View>

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

                        <TouchableOpacity style={styles.signin}
                            onPress={this.onsignin}
                        >
                            <Text style={styles.textsignin}>
                                SIGNIN
                            </Text>
                        </TouchableOpacity>

                    </View>

                </TouchableWithoutFeedback>

            </ImageBackground >
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

    signin: {
        height: 60,
        width: 120,
        backgroundColor: Colors.maincolor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        borderRadius: 24
    },

    textsignin: {
        color: Colors.colortextInput,
        fontSize: 25,
    },
})

export default SignIn;