import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

export default function App() {
  const [message, setMessage] = React.useState("");

  const handleTextPress = () => {
    setMessage(message + "надпись нажата \n");
  };
  const handleButtonPress = () => {
    setMessage(message + "кнопка нажата \n");
  };

  let text = "";

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} onPress={handleTextPress}>
        Нажми на надпись
      </Text>
      <Button title="Нажми на меня" onPress={handleButtonPress} />
      <Text>{message}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    color: "red",
    marginTop: 10,
    marginBottom: 30,
  },
});
