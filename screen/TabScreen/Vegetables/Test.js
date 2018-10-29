import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ImageBackground,

} from 'react-native';
import Swiper from 'react-native-swiper'

const { width, height } = Dimensions.get('window')

class Test extends Component {

    onLogin = () => {
        this.props.navigation.navigate('Login')
    }

    onSkip = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (

            <Swiper style={styles.Container}
                dot={<View style={{
                    backgroundColor: '#A5C3CC',

                }} />}
                activeDot={<View style={{
                    backgroundColor: '#46BCE0',

                }} />}
                // paginationStyle={{
                //     bottom: 70,

                // }}
                loop={false}
            >

                <ImageBackground
                    style={styles.image}
                    source={require('../../../../HinhAnh/BackGound/7.png')}
                    resizeMode='cover'
                >
                </ImageBackground>

                <ImageBackground
                    style={styles.image}
                    source={require('../../../../HinhAnh/BackGound/8.png')}
                    resizeMode='cover'
                >

                    <Text style={styles.butonLogin}
                        onPress={this.onLogin}
                    >LOGIN</Text>

                    <Text style={styles.butonSkip}
                        onPress={this.onSkip}
                    >SKIP</Text>
                </ImageBackground>

                <ImageBackground
                    style={styles.image}
                    source={require('../../../../HinhAnh/BackGound/9.png')}
                    resizeMode='cover'
                >
                    <Text style={styles.butonLogin}
                        onPress={this.onLogin}
                    >LOGIN</Text>

                    <Text style={styles.butonSkip}
                        onPress={this.onSkip}
                    >SKIP</Text>

                </ImageBackground>

            </Swiper >

        )
    }
}

const styles = StyleSheet.create({

    Container: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },

    slide: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        height: height,
        width: width,
    },

    butonSkip: {
        color: '#00C9FE',
        fontWeight: 'bold',
        fontSize: 20,
        left: 320,
        bottom: -630,
        width: 60,
        position: 'absolute'
    },

    butonLogin: {
        color: '#00C9FE',
        fontWeight: 'bold',
        fontSize: 20,
        left: 30,
        bottom: -655,
        width: 60,
        position: 'absolute'
    }

})

export default Test;