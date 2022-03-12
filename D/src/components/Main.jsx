import { StyleSheet, View } from "react-native"
import { Route, Routes } from "react-router-native"
import AppBar from "./AppBar"
import CreateReview from "./CreateReview"
import RegisterUser from "./RegisterUser"
import RepositoryList from "./RepositoryList"
import SignIn from "./SignIn"
import SingleRepo from "./SingleRepo"
import MyReviews from "./MyReviews"


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
        <Route path="/:id" element={<SingleRepo />} />
        <Route path="create" element={<CreateReview />} />
        <Route path="reviews" element={<MyReviews />} />
      </Routes>
    </View>
  )
}

export default Main
