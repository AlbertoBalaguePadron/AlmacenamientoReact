import { useState } from "react";
import { AsyncStorage } from "react-native";
import { StyleSheet, Button, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  const changetext = (value) => {
    setText(value);
  };

  const almacenar = async () => {
    try {
      await AsyncStorage.setItem(
        'key',
        text,
      );
    } catch (error) {
      console.log(error)
    }
  };

  const mostrar = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        console.log("Datos recogidos correctamente ", value);
        setData(value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button style={styles.addButton} title="Mostrar" onPress={mostrar} />

      <Text> Este es el dato guardado : {data}</Text>

      <TextInput
        style={styles.inputTextModal}
        placeholder="Introduzca un texto:"
        keyboardType="default"
        onChangeText={changetext}
        value={text}
      />

      <Button style={styles.addButton} title="Guardar" onPress={almacenar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
