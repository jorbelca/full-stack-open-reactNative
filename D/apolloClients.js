import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import Constants from "expo-constants"
import { setContext } from "@apollo/client/link/context"

const { apolloUri } = Constants.manifest.extra

const httpLink = createHttpLink({ uri: apolloUri })


const createApolloClient = (authStorage) => {
  const authlink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken()
      return {
        headers: {
          ...headers,
          authorizations: accessToken ? `Bearer ${accessToken}` : "",
        },
      }
    } catch (error) {
      console.error(error)
      return { headers }
    }
  })

  return new ApolloClient({
    link: authlink.concat(httpLink),
    cache: new InMemoryCache(),
  })
}

export default createApolloClient
