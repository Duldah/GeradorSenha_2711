import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function SavedPasswords({route}) {
    const {savedPasswords} = route.params; //Recebendo as senhas salvas via parametro de navegação

    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.title}>Senhas Salvas</Text>
            <FlatList
            data={savedPasswords}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>(
                <View style={StyleSheet.passwordContainer}>
                    <Text style={StyleSheet.passwordText}>{item}</Text>
                </View>
            )}
            />
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
    },
    passwordContainer: {
      backgroundColor: '#e0e0e0',
      width: '100%',
      height: 50,
      borderRadius: 5,
      padding: 10,    
    },
    passwordText:{
      color: '#000',
      fontSize: 16,
    },
  });