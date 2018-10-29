import React, { Component } from 'react';
import { Icon } from 'native-base'
import { StyleSheet } from 'react-native';
import Colors from './Colors'

export default class Iconmenu extends Component {
    render() {
        return (

            <Icon name="ios-menu" size={26} style={styles.menuleft}
                onPress={() => {
                    const { toggleDrawer } = this.props.drawerNavigation;
                    toggleDrawer();
                }} />
        );
    }
}

const styles = StyleSheet.create({
    menuleft: {
        color: Colors.maincolor,
        position: 'absolute',
        left: 30
    },
})