import React from "react";
import { StyleSheet, Text, View} from "react-native";

export default function Calculadora(props){
    let texto =[];
    texto.push(
        <Text style={styles.textBlock}>
            <Text style={styles.texto}>Número de Pessoas: {props.qtd}</Text>
            <Text style={styles.texto}>Refrigerante: {props.qtd * 0.6} Litros</Text>
            <Text style={styles.texto}>Água: {props.qtd * 0.2} Litros</Text>
            <Text style={styles.texto}>Bolo: {props.qtd * 0.1} Kilos</Text>
            <Text style={styles.texto}>Doces em geral: {props.qtd * 3} Unidades</Text>
            <Text style={styles.texto}>Salgadinhos: {props.qtd * 10} Unidades</Text>
        </Text>
    );
    return(
        <>
            <View>
               {texto}     
            </View> 
        </>
    );
}

const styles = StyleSheet.create({
    textBlock:{
        display: "flex",
        flexDirection: "column",
    },
    texto:{
        fontFamily: "Verdana",
        fontSize: 25,
        color: '#232323',
    },
});