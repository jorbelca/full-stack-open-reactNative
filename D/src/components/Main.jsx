import { StyleSheet, View } from "react-native"
import { Navigate, Route, Routes } from "react-router-native"
import AppBar from "./AppBar"
import RegisterUser from "./RegisterUser"

import RepositoryList from "./RepositoryList"
import SignIn from "./SignIn"
import RepositoryPage from "./RespositoryPage"
import CreateReview from "./CreateReview"
import UserReviews from "./UserReviews"
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
        <Route
          path="/repository/:repositoryId"
          element={<RepositoryPage />}
          exact
        />
        {<Route path="/reviews/create" element={<CreateReview />} exact />}
        {<Route path="/reviews" element={<UserReviews />} exact />}
        <Route path="/users/create" element={<RegisterUser />} exact />
        <Route path="/login" element={<SignIn />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
