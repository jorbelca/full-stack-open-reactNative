import { StyleSheet, View } from "react-native"
import { Route, Routes } from "react-router-native"
import AppBar from "./AppBar"
import RegisterUser from "./RegisterUser"
import RepositoryList from "./RepositoryList"
import SignIn from "./SignIn"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="repo" element={<RepositoryList />} />
        <Route path="/" element={<SignIn />} />
        <Route path="register" element={<RegisterUser />} />
      </Routes>
    </View>
  )
}

export default Main
