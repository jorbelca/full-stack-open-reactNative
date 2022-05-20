import { ApolloProvider } from "@apollo/client"
import { StatusBar } from "expo-status-bar"
import { NativeRouter } from "react-router-native"
import Main from "./src/components/Main"
import createApolloClient from "./src/utils/apolloClient"
import AuthStorageContext from "./src/contexts/AuthStorageContext"
import AuthStorage from "./src/utils/authStorage"
import { Provider as PaperProvider } from "react-native-paper"
const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <PaperProvider>
              <Main />
            </PaperProvider>
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </>
  )
}

export default App
