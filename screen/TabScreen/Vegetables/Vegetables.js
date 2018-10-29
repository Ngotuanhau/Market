import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Text,
    FlatList,
    StyleSheet,
    Image
} from 'react-native';

import {
    Container,
    Icon
} from 'native-base';

import Logo from '../../../Component/Logo'
import Colors from '../../../Component/Colors'
import Data from '../../../Component/Data'

const { height, width } = Dimensions.get('window')

class Vegetables extends Component {

    datavegetable = ({ item, index }) => {
        return (
            <View style={styles.form}>

                <View style={styles.Tab}>

                    <View style={styles.Tabchild}>
                        <Image source={item.image}
                            style={{ height: 61, width: 96, borderRadius: 27 }}
                        />
                    </View>

                    <View style={styles.text}>
                        <Text style={{ fontSize: 15 }}>{item.name}</Text>
                    </View>

                    <View style={styles.text}>
                        <Text style={{ fontSize: 15 }}>{item.price}</Text>
                    </View>

                    <View style={styles.addCart}>
                        <Icon name={'ios-basket'} style={{ color: Colors.maincolor }} />
                        <Text style={styles.textaddcart}>Add to card</Text>
                    </View>

                </View>

                <View style={styles.Tab}>

                    <View style={styles.Tabchild}>
                        <Image source={item.image}
                            style={{ height: 61, width: 96, borderRadius: 27 }}
                        />
                    </View>

                    <View style={styles.text}>
                        <Text style={{ fontSize: 15 }}>{item.name}</Text>
                    </View>

                    <View style={styles.text}>
                        <Text style={{ fontSize: 15 }}>{item.price}</Text>
                    </View>

                    <View style={styles.addCart}>
                        <Icon name={'ios-basket'} style={{ color: Colors.maincolor }} />
                        <Text style={styles.textaddcart}>Add to card</Text>
                    </View>

                </View>

            </View>

        )
    }

    render() {

        return (
            <Container >

                <View style={{ width: width, height: 1, backgroundColor: Colors.colortextInput }}></View>
                <FlatList
                    data={Data.Data_Vegetable}
                    renderItem={this.datavegetable}
                    keyExtractor={(item, index) => index.toString()}
                />

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.maincolor,
        marginTop: 1,
    },

    form: {
        width: width,
        height: 200,
        backgroundColor: Colors.maincolor,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },

    Tab: {
        width: 144,
        height: 177,
        borderRadius: 17,
        backgroundColor: Colors.colortextInput,
        alignItems: 'center',
    },

    Tabchild: {
        marginTop: 16,
        borderRadius: 27,
        backgroundColor: Colors.maincolor,
        height: 61,
        width: 96
    },

    addCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 9
    },

    text: {
        marginTop: 10,
    },

    textaddcart: {
        fontSize: 15,
        marginLeft: 4,
        color: Colors.maincolor
    },
})

export default Vegetables;