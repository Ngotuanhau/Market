
import { createStackNavigator } from 'react-navigation'

import Login from '../screen/StackScreen/Login';
import SignIn from '../screen/StackScreen/SignIn'
import Forgotpass from '../screen/StackScreen/Forgotpass'


const StackLogin = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },

    SignIn: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },

    Forgotpass: {
        screen: Forgotpass,
        navigationOptions: {
            header: null
        }
    }
})

export default StackLogin;