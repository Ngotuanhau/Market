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
    TouchableOpacity,
    Alert
} from 'react-native';

import Colors from '../../Component/Colors'

const { height, width } = Dimensions.get('window')

class Forgotpass2 extends Component {
    constructor(props) {
        super(props),
            this.state = {
                phonenumber: '',
            }
    }

    onconfirm = () => {
        Alert.alert(
            'Message',
            'Code had send to your phone !!!',
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
                                    underlineColorAndroid='transparent'
                                    placeholderTextColor={Colors.colortextInput}
                                    value={this.state.number}
                                    onChangeText={
                                        (number) => { this.setState({ number }) }
                                    }>
                                </TextInput>
                            </View>

                        </View>

                        <TouchableOpacity style={styles.confirm}
                            onPress={this.onconfirm}
                        >
                            <Text style={styles.textconfirm}>
                                CONFIRM
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

    confirm: {
        height: 60,
        width: 120,
        backgroundColor: Colors.maincolor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 24
    },

    textconfirm: {
        color: Colors.colortextInput,
        fontSize: 25,
    },
})

export default Forgotpass2;