import { useApolloClient, useMutation } from "@apollo/client"
import { useContext } from "react"
import { useNavigate } from "react-router-native"
import AuthStorageContext from "../contexts/AuthStorageContext"
import { LOGIN } from "../graphQL/mutations"

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.error(error)
    },
  })
  const authStorage = useContext(AuthStorageContext)

  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const res = await mutate({
      variables: { credentials: { username, password } },
    })

    await authStorage.setAccessToken(res.data.authenticate.accessToken)

    apolloClient.resetStore()

    return res
  }

  return [signIn, result]
}

export default useSignIn
