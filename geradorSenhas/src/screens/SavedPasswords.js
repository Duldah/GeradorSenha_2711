import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function SavedPasswords({route}) {
    const {savedPasswords} = route.params; //Recebendo as senhas salvas via parametro de navegação

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Senhas Salvas</Text>
            <FlatList
            data={savedPasswords}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>(
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>{item}</Text>
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
      color:'#0A3856',
      fontWeight: 'bold',
      fontSize: 24,
      marginBottom: 20,
    },
    passwordContainer: {
      backgroundColor: '#F0F4F8',
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