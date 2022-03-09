import { ApolloProvider } from "@apollo/client"
import { StatusBar } from "expo-status-bar"
import { NativeRouter } from "react-router-native"
import Main from "./src/components/Main"
import createApolloClient from "./src/utils/apolloClient"
import Constants from "expo-constants"

const apolloClient = createApolloClient()

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar />
    </>
  )
}

export default App
