import React, { Component } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    FlatList,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Container,
    Icon,
} from 'native-base'

import Colors from '../../Component/Colors';
import Data from '../../Component/Data';

const { heigh, width } = Dimensions.get('window')

class Home extends Component {

    datahome = ({ item, index }) => {
        return (
            <View style={styles.container}>

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
                        <TouchableOpacity>
                            <View style={styles.addCart}>
                                <Icon name={'ios-basket'} style={{ color: Colors.maincolor }} />
                                <Text style={styles.textaddcart}>Add to card</Text>
                            </View>
                        </TouchableOpacity>
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

                        <TouchableOpacity>
                            <View style={styles.addCart}>
                                <Icon name={'ios-basket'} style={{ color: Colors.maincolor }} />
                                <Text style={styles.textaddcart}>Add to card</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>

        )
    }

    render() {

        return (
            <Container >
                {/* <View style={styles.line}></View> */}
                <FlatList
                    data={Data.Data_Home}
                    renderItem={this.datahome}
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
        //alignItems: 'center'
    },

    line: {
        width: width,
        height: 1,
        backgroundColor: Colors.colortextInput
    },

    form: {
        width: width,
        height: 200,
        backgroundColor: Colors.maincolor,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        //flex: 1
    },

    Tab: {
        width: 140,
        height: 170,
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
        marginTop: 7,
    },

    text: {
        marginTop: 7,
    },

    textaddcart: {
        fontSize: 15,
        marginLeft: 4,
        color: Colors.maincolor
    },
})
export default Home;