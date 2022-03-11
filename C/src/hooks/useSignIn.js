import { useApolloClient, useMutation } from "@apollo/client"
import { useNavigate } from "react-router-native"
import { LOGIN } from "../graphQL/mutations"

import useAuthStorage from "./useAuthStorage"

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.error(error)
    },
  })
  const authStorage = useAuthStorage()
  const navigate = useNavigate()
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const res = await mutate({ variables: { username, password } })
    const token = res.data.authenticate.accessToken

    // const setToken = new AuthStorage("token")
    await authStorage.setAccessToken(token)

    apolloClient.resetStore()
    navigate("repo")
  }

  return [signIn, result]
}

export default useSignIn
