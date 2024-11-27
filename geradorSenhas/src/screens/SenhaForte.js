import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function SenhaForte({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Qual a importância de ter uma senha forte?
      </Text>

      <Image
        source={require("../img/senha.png")}
        style={styles.logo}
      />

      <Text style={styles.texto}>
        Senhas fortes são essenciais para proteger suas contas online contra ataques, 
        como os de força bruta, onde hackers tentam adivinhar sua senha automaticamente. 
        Uma senha forte deve ser longa (pelo menos 12-16 caracteres) e incluir uma combinação
        de letras maiúsculas, minúsculas, números e símbolos, dificultando que seja adivinhada.
        Além disso, é importante usar senhas únicas para cada conta, evitando que, se uma for 
        comprometida, outras também sejam vulneráveis. Com uma senha forte, você aumenta 
        significativamente a segurança dos seus dados pessoais e financeiros.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#168990', 
    marginBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  texto: {
    fontSize: 19,
    color: '#0A3856',
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: 'justify',
  },
  passwordContainer: {
    backgroundColor: '#66E0E0',
    width: '100%',
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  passwordText: {
    color: '#0A3856', // Cor aplicada ao texto da senha
    fontSize: 16,
  },
});
