import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    Image,
    View,
} from 'react-native';
import { Icon } from 'native-base'

import Colors from './Colors'
import Iconmenu from './Iconmenu';

const { height, width } = Dimensions.get('window')

class Logo extends Component {

    render() {
        let { drawerNavigation } = this.props.screenProps;
        return (
            <View style={styles.form}>

                <View style={styles.top}>

                    <Iconmenu drawerNavigation={drawerNavigation} />
                    <View style={styles.menuright}>
                        <Icon name={'ios-search'} size={26} style={{ color: Colors.maincolor }} />
                        <Icon name={'ios-cart'} size={26} style={{ color: Colors.maincolor }} />
                    </View>

                </View>

                <View style={styles.bot}></View>

                <View style={styles.circle}>
                    <Image style={styles.circle}
                        source={require('../hinhanh/BackGound/logo.jpg')}>
                    </Image>
                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    form: {
        //flex: 1,
        height: 100,
        width: width,
        backgroundColor: Colors.maincolor,
        alignItems: 'center',
        justifyContent: 'center'
    },

    menuleft: {
        color: Colors.maincolor,
        position: 'absolute',
        left: 30
    },

    menuright: {
        position: 'absolute',
        width: 100,
        height: 40,
        right: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    circle: {
        width: 90,
        height: 90,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },

    top: {
        backgroundColor: 'white',
        height: 50,
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
    },

    bot: {
        backgroundColor: Colors.maincolor,
        height: 50,
        width: width
    }
})

export default Logo;