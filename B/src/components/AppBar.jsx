import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native"
import Constants from "expo-constants"
import { Link } from "react-router-native"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    justifyContent: "space-evenly",
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
      <ScrollView horizontal={true} style={{}}>
        <Pressable>
          <View style={styles.link}>
            <Link to="repo">
              <Text style={styles.text}>Repositories</Text>
            </Link>
          </View>
          
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
