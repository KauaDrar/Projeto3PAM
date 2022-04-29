import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Calculadora from './componente/Calculadora';

export default function App() {
  const [qtd, setQtd] = useState(0);
  const [val, setVal] = useState();
  function Calcular(){
    setQtd(val);
  }
  return (
    <View style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.text}>Quantidade de Pessoas</Text>
          <TextInput 
              style={styles.input}
              value={val}
              onChangeText={(value)=>setVal(value)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={Calcular}>
          <Text style={styles.textButton}>CALCULAR</Text>
        </TouchableOpacity>
        <Calculadora qtd={qtd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c88b41',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
  },
  input: {
    width: 200,
    borderWidth:2,
    fontSize:30,
    borderRadius:6,
    borderColor: '#1b0c24'
  },
  text: {
    fontFamily: "Verdana",
    fontSize:25,
    fontWeight: 700,
    textAlign: 'center',
    color: '#1b0c24'
  },
  button: {
    margin: 5,
    textAlign: 'center',
    backgroundColor: '#db6c22',
    borderRadius: 5,
    width: 170
  },
  textButton: {
    fontWeight: 700,
    color: '#1b0c24',
    fontSize: 30,
  },
});