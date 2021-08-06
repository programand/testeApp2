import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
 
function Inicial( {Navigation}) {
    const abrirPage1 = () =>{
        Navigation.navigate('Page1')
    }
    return(
        <View>
            <View>
                <Text>Tela de teste</Text>
                <TouchableOpacity onPress={abrirPage1}>
                    <text>Page 1</text>
                </TouchableOpacity>
            </View>
            </View>
        );
}


const styles = StyleSheet.create({
    conteudoBtns:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },

    fundo:{
        backgroundColor: "black",
        flex: 1,
         padding: 30,
    },
    titulo:{
          marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: "white",
    },
});
export default Inicial; 