import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function SenhaForte({ route }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Qual a importância de ter uma senha forte?
      </Text>
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
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    padding:25,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
    padding: 25,
  },
  passwordContainer: {
    backgroundColor: '#e0e0e0',
    width: '100%',
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  passwordText: {
    color: '#000',
    fontSize: 16,
  },
});