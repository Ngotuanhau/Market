import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation'
import {
    View,
    SafeAreaView,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Icon } from 'native-base'

import TabNavigation from '../screen/TabNavigation'
import Profile from '../screen/DrawerScreen/Profile'
import Order from '../screen/DrawerScreen/Order'
import Contas from '../screen/DrawerScreen/Contas'
import Message from '../screen/DrawerScreen/Message'

import Colors from '../Component/Colors'

const { height, width } = Dimensions.get('window')

const routeConfigs = {

    Tab: {
        screen: TabNavigation,
        navigationOptions: {
            title: 'Home',
            drawerIcon: <Icon name='ios-home' style={{ color: Colors.colortextInput }} />,
        }
    },

    Profile: {
        screen: createStackNavigator({ screen: Profile }),
        navigationOptions: {
            title: 'Profile',
            drawerIcon: <Icon name='ios-person' style={{ color: Colors.colortextInput }} />
        }
    },

    Order: {
        screen: createStackNavigator({ screen: Order }),
        navigationOptions: {
            title: 'Order History',
            drawerIcon: <Icon name='ios-folder' style={{ color: Colors.colortextInput }} />
        }
    },

    Contas: {
        screen: createStackNavigator({ screen: Contas }),
        navigationOptions: {
            title: 'Contas',
            drawerIcon: <Icon name='ios-call' style={{ color: Colors.colortextInput }} />
        }
    },

    Message: {
        screen: createStackNavigator({ screen: Message }),
        navigationOptions: {
            title: 'Message',
            drawerIcon: <Icon name='ios-mail' style={{ color: Colors.colortextInput }} />
        }
    }
}

const CustomDrawerContentComponent = (props) => (

    <SafeAreaView style={{
        flex: 1,
        backgroundColor: Colors.maincolor,

    }}
        forceInset={{ top: 'always', horizontal: 'never' }}>

        <View style={styles.logo}>
            <View style={styles.top}>
            </View>

            <View style={styles.bot}>
            </View>

            <View style={styles.circle}>
                <Image style={styles.circle}
                    source={require('../hinhanh/BackGound/logo.jpg')}>
                </Image>
            </View>
        </View>

        <View style={styles.content}>
            <DrawerItems {...props} />
        </View>

        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.logout}
                onPress={this.onlogout}
            >
                <Text style={styles.textlogout}>
                    LOG OUT
                </Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView >

);

const styles = StyleSheet.create({

    logo: {
        alignItems: 'center'
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
    },

    circle: {
        width: 90,
        height: 90,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },

    content: {
        marginTop: 40
    },

    logout: {
        height: 40,
        width: 100,
        backgroundColor: Colors.colortextInput,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 24
    },

    textlogout: {
        color: Colors.maincolor,
        fontSize: 20,
    },
})

const drawerNavigatorConfig = {
    drawerPosition: 'lelf',
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
        inactiveTintColor: Colors.colortextInput
    },
    drawerWidth: 250,
};

export default createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
