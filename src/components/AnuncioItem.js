import React from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Anuncio from '../models/anuncio'


export default function AnuncioItem(props) {
    const anuncio = new Anuncio(props.anuncio)
    return <ScrollView>
        <TouchableOpacity onPress={props.onPress}>
            <Image style={{
                height: 150,
                width: '75%',
                borderRadius: 5,
            }} source={{ uri: anuncio.image }} />
        </TouchableOpacity>

        <View >
            <Text >{anuncio.final == 1 ? 'Aluga-se' : anuncio.final == 2 ? 'Vende-se' : '?'}</Text>
        </View>
        <View>
            <Text style={{ fontSize: anuncio.name.length > 12 ? 16 : 20, }}>{anuncio.name}</Text>
            <Text style={{ fontWeight: 'bold', marginTop: 5 }}>R$&nbsp;{anuncio.price.toFixed(0)}</Text>
        </View>
    </ScrollView>
}