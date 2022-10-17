import React, { Component } from 'react'
import { Text, View, ScrollView, Image, Button } from 'react-native'
import { Input } from 'react-native-elements'
import DatabaseClass from '../services/database'
import Anuncio from '../models/anuncio'
import SimplePicker from '../components/SimplePicker'
import ImagePicker from '../components/ImagePicker'

class CadastroScreen extends Component {
    constructor(props) {
        super(props)
        this.db = new DatabaseClass()
        this.navigation = props.navigation
        this.types = [
            { label: 'Casa', value: 1, },
            { label: 'Comércio', value: 2, },
            { label: 'Condomínio', value: 3, },
        ]
        this.final = [
            { label: 'Alugar', value: 1, },
            { label: 'Vender', value: 2, },
        ]
        this.state = {
            anuncio_name: '',
            anuncio_price: 0.0,
            anuncio_address: '',
            anuncio_final: 1,
            anuncio_type: 1,
            anuncio_image: ''
        }
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 25, color: '#008000' }}>Cadastro de anúncio</Text>
                    <Input style={{ textAlign: 'center', }} placeholder="Nome" onChangeText={(text) => this.setState({ anuncio_name: text })} maxLength={20} />
                    <Input style={{ textAlign: 'center', }} type="text" placeholder="Endereço" onChangeText={text => this.setState({ anuncio_address: text })} maxLength={60} />
                    <Input style={{ textAlign: 'center', }} placeholder="Preço" onChangeText={text => this.setState({ anuncio_price: text })} keyboardType='numeric' maxLength={12} />

                    <SimplePicker onChange={(value) => this.setState({ anuncio_type: value })} values={this.types} />
                    <SimplePicker onChange={(value) => this.setState({ anuncio_final: value })} values={this.final} />

                    <View style={{ flexDirection: 'column' }}>
                        <ImagePicker title="Carregar foto" usePhotoFromLibrary={true} onTakePhoto={(uri) => this.setState({ anuncio_image: uri })} />
                        <ImagePicker title="Tirar foto" saveCameraImage={true} onTakePhoto={(uri) => this.setState({ anuncio_image: uri })} />

                    </View>

                    {this.state.anuncio_image ?
                        <View>
                            <Image style={{ marginVertical: 10, alignSelf: 'center', width: '100%', height: 250 }} source={{ uri: this.state.anuncio_image }} />
                        </View>
                        :
                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Nenhuma imagem carregada!</Text>
                    }
                    <Button title="Cadastrar" onPress={this.add_address} />
                </ScrollView>
            </View>
        )
    }
    add_address = (() => {
        let anuncio = new Anuncio({
            name: this.state.anuncio_name,
            image: this.state.anuncio_image,
            price: this.state.anuncio_price,
            address: this.state.anuncio_address,
            final: this.state.anuncio_final,
            type: this.state.anuncio_type,
        })
        if (!anuncio.isValidWithOutId()) {
            alert('Por favor preencha todos os campos!')
            return
        }
        this.db.addNewAnuncio(anuncio).then(result => {
            if (result) {
                this.navigation.pop()
                this.sendAnuncioNotification(anuncio)
            } else alert("Erro ao cadastrar anúncio!" + anuncio.name)
        })
    }).bind(this)

}
export default CadastroScreen;
