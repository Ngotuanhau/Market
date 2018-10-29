import React, { Component } from 'react';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'

import Colors from '../Component/Colors'
import Logo from '../Component/Logo'
import Home from './TabScreen/Home';
import Fruits from './TabScreen/Fruits/Fruits';
import Vegetables from './TabScreen/Vegetables/Vegetables';
import Drink from './TabScreen/Drink/Drink'

const RouteConfigs = {
    All: {
        screen: Home,
    },

    Fruits: {
        screen: Fruits,
    },

    Drink: {
        screen: Drink,
    },

    Vegetables: {
        screen: Vegetables,
    }
}

const TabNavigatorConfig = {

    tabBarOptions: {
        style: {
            backgroundColor: Colors.maincolor
        },

        labelStyle: {
            fontSize: 9,
            alignItems: 'center',
            justifyContent: 'center',
            color: Colors.colortextInput,
            fontWeight: 'bold',
        },

        //gạch chân tab!!

        indicatorStyle: {
            backgroundColor: Colors.colortextInput
        },
    },
    tabBarPosition: 'top'
}
class Tab extends React.Component {
    Tab = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);
    render = () => <this.Tab screenProps={{ drawerNavigation: this.props.navigation }} />
};

export default class Stack extends React.Component {
    Stack = createStackNavigator({ Tab: { screen: Tab } }, {
        navigationOptions: {
            header: <Logo screenProps={{ drawerNavigation: this.props.navigation }} />
        }
    });
    render = () => <this.Stack />
};