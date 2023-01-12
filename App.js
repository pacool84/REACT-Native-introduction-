import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> 🤯 Hello my friend REACT Native 🤖</Text>
      <LoginForm></LoginForm>
      <StatusBar style="auto" />
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
