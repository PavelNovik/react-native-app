import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Something in the way!</Text>
      <Text>What the fuck!</Text>
      <Text>Prosze bardzo.</Text>
    </View>
  );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})