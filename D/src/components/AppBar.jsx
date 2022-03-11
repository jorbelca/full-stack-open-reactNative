import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native"
import Constants from "expo-constants"
import { Link } from "react-router-native"
import theme from "../theme"
import { useApolloClient, useQuery } from "@apollo/client"
import { ME } from "../graphQL/queries"
import useAuthStorage from "../hooks/useAuthStorage"
import { useState } from "react"

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
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
  const [user, setUser] = useState(null)

  const apolloClient = useApolloClient()
  const authStorage = useAuthStorage()

  // const token = async () => await authStorage.getAccessToken()
  // console.log(token)

  const { data } = useQuery(ME, {})
  if (data)
    if (data.me !== null) {
      setUser(1)
    }

  const handleLogout = async () => {
    try {
      console.log("logout")
      await authStorage.removeAccessToken()
      apolloClient.resetStore()
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        style={{ flexDirection: "row", display: "flex" }}
      >
        <Pressable
          onPress={() => {
            handleLogout
          }}
        >
          <View style={styles.link}>
            <Link to="repo">
              <Text style={styles.text}>Repositories</Text>
            </Link>
          </View>
        </Pressable>
        {user == null ? (
          <Pressable>
            <View style={styles.link}>
              <Link to="/">
                <Text style={styles.text}>Sign In</Text>
              </Link>
            </View>
          </Pressable>
        ) : (
          <Pressable onPress={() => console.log("sss")}>
            <View style={styles.link}>
              <Link to="/">
                <Text style={styles.text}>Sign Out</Text>
              </Link>
            </View>
          </Pressable>
        )}
        <Pressable>
          <View style={styles.link}>
            <Link to="register">
              <Text style={styles.text}>Register</Text>
            </Link>
          </View>
        </Pressable>

        <Pressable>
          <View style={styles.link}>
            <Link to="create">
              <Text style={styles.text}>Create</Text>
            </Link>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  )
}

export default AppBar
