import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native"
import Constants from "expo-constants"
import { Link } from "react-router-native"
import theme from "../theme"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.textPrimary,
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "row",
  },
  link: {},
  text: {
    color: "#fff",
    margin: 10,
    fontWeight: "bold",
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        style={{ flexDirection: "row", display: "flex" }}
      >
        <Pressable>
          <View style={styles.link}>
            <Link to="repo">
              <Text style={styles.text}>Repositories</Text>
            </Link>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.link}>
            <Link to="/">
              <Text style={styles.text}>Sign In</Text>
            </Link>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default AppBar
