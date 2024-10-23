import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';

//***Novo: importações para navegação */
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//*** Fim das novas importações para navegação */

import SavedPasswords from './src/screens/SavedPasswords'; //***Novo: Tela de senhas salvas */
import { ModalPassword } from './src/components/modal/index';

let charset = "abcdefghijklmnopqrstuvwxyz!@#$%&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//**Novo: Criação do stack navigator para as telas */
const Stack = createStackNavigator();
//** Fim */

function HomeScreen({ navigation }) {
  const [senhaGerada, setSenhaGerada] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]); //**Novo: Estado para senhas salvas */

  function gerarSenha() {

    let senha = "";

    for (let i = 0, n = charset.length; i < 10; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n));
    }

    setSenhaGerada(senha)
    setModalVisible(true)

  }

  //** novo: Função para salvar senha e navegar para a tela de senhas salvas*/
  function salvarSenha() {
    setSavedPasswords(prevPasswords => {
      const updatePasswords = [...prevPasswords, senhaGerada];
      setModalVisible(false); // Fecha o modal após salvar a senha
      navigation.navigate('SavedPasswords', { savedPasswords: updatePasswords }); //Navega e passa as senhas
      return updatePasswords; //Atualiza o estado de senhas salvas
    });
  }
  //*** fim da função de salvar senha e navegar */


  return (
    <View style={styles.container}>
      <Image
        source={require("./src/img/logolock.png")}
        style={styles.logo}
      />

      <Text style={styles.title}> LockGen </Text>

      <TouchableOpacity style={styles.button} onPress={gerarSenha}>
        <Text style={styles.textButton}> Gerar Senha </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword senha={senhaGerada} handleClose={() => setModalVisible(false)} salvarSenha={salvarSenha} />
      </Modal>

      <Text style={styles.senha}>{senhaGerada}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SavedPasswords" component={SavedPasswords} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#333',
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 6,
  },
  textButton: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  senha: {
    marginTop: 20,
    color: '#333',
    fontSize: 15,
    fontWeight: 'bold',
  },
});