import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import DataBase from '../services/database'


export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.db = new DataBase
        this.navigation = props.navigation

    }
    render() {
        return (
            <View style={stylles.body}>
                <View>
                    <Image source={require('../img/brasil.jpg')} style={stylles.imgbrasil} />
                </View>
                <View style={stylles.buttons}>
                    <TouchableOpacity onPress={() => { this.navigation.push('Listagem', {}) }} style={stylles.btnOn}>
                        <Text style={stylles.btnOne}>VER ANÚNCIOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.navigation.push('Cadastro', {}) }} style={stylles.btnTw}>
                        <Text style={stylles.btnTwo}>CRIAR ANÚNCIO</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylles.about}>
                    <Text style={stylles.titteAbout}>Sobre nós</Text>
                    <Text style={stylles.textAbout}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </Text>
                    <Text style={stylles.textAbout}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </Text>
                    <Text style={stylles.textAbout}>
                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Text>
                </View>
                <TouchableOpacity style={stylles.baseboard}>
                    <Text style={stylles.textBaseboard}>Hello, this was developed by Dário Santos</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const stylles = StyleSheet.create({
    body: {
        marginTop: 1,
        flex: 1,
    },
    imgbrasil: {
        width: "100%",
        resizeMode: 'contain',
        height: 250,
    },
    buttons: {
        flexDirection: 'row',

    },
    btnOn: {
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: '#008000',
        borderColor: '#ffd700',
        marginHorizontal: 19
    },
    btnOne: {
        fontWeight: 'bold',
        color: '#ffd700',
    },
    btnTw: {
        padding: 15,
        paddingHorizontal: 25,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#ffd700',
        backgroundColor: '#008000',
        marginHorizontal: 20
    },
    btnTwo: {
        fontWeight: 'bold',
        color: '#ffd700',
    },
    about: {
        marginVertical: 20,
        alignItems: 'center',
    },
    titteAbout: {
        fontSize: 25,
        fontWeight: '200',
        borderWidth: 0.5,
        width: 250,
        textAlign: 'center',
        letterSpacing: 3,
    },
    textAbout: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5
    },
    baseboard: {
        borderWidth: 1,
        padding: 20,
    },
    textBaseboard: {
        textAlign: 'center',
        color: '#0000ff',
        fontWeight: '200',
        fontSize: 15
    }
})