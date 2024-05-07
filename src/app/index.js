import { View, Text, Image } from 'react-native';
import { styles } from '../css/style';
import Botao from '../components/botao';
import InputTexto from '../components/inputTexto';
import { useState } from 'react';

export default function App() {
  const [valida, setValida] = useState();
  const atualizaTexto = (newText) =>{
    console.log(newText);
  }
  return (
  
  <View style={styles.container}>
    <Image style={{width:'80%', height:80, marginBottom:30}}
    resizeMode="contain"source={require('../../assets/facebook.png')}
  />

  <InputTexto label="Digite seu nome" dica="Digite seu nome"/>
  <InputTexto label="Digite sua senha" dica="Digite sua senha" seguranca={true}/>

  <Botao btn="entrar" cor='#1477F2' src='home' cortexto='#fff' tm='10%'/>
  <View style={styles.cont}>
    <View style={styles.line}/>
    <Text style={styles.text}>ou</Text>
    <View style={styles.line}/>
    </View>
    <Botao btn="criar uma nova conta" cor='' src='excluido' cortexto='000' tm='5%'/>
  </View>
  );
}