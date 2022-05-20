import { View, StyleSheet, ScrollView } from "react-native"
import Constants from "expo-constants"
import { Link } from "react-router-native"
import theme from "../theme"
import { useApolloClient, useQuery } from "@apollo/client"
import { ME } from "../graphQL/queries"
import Text from "./Text"
import AuthStorageContext from "../contexts/AuthStorageContext"
import { useContext } from "react"

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
  tab: {
    padding: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
})

const AppBar = () => {
  const apolloClient = useApolloClient()
  const authStorage = useContext(AuthStorageContext)

  const { loading, data } = useQuery(ME)

  const handleLogout = () => {
    try {
      authStorage.removeAccessToken()
      apolloClient.resetStore()
      navigate("/")
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
        <Link to="/">
          <Text style={styles.tab}>Repositories</Text>
        </Link>

        {!loading && data.me !== null ? (
          <>
            <Text onClick={() => handleLogout()} style={styles.tab}>
              Sign Out
            </Text>
          </>
        ) : (
          <>
            <Link to="/login">
              <Text style={styles.tab}>Sign In</Text>
            </Link>
            <Link to="/users/create">
              <Text style={styles.tab}>Sign Up</Text>
            </Link>
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
