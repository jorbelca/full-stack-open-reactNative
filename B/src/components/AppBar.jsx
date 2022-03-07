import { View, StyleSheet, Pressable, Text } from "react-native"
import Constants from "expo-constants"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,

    backgroundColor: "#24292e",
  },
  text: {
    color: "white",
    margin: 20,
    fontWeight: "bold",
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  )
}

export default AppBar
