import { useMutation } from "@apollo/client"
import { LOGIN } from "../graphQL/mutations"

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGIN, {
    onError: (error) => {
      console.error(error)
    },
  })

  const signIn = async ({ username, password }) => {
    const res = await mutate({ variables: { username, password } })
    const token = res.data.authenticate.accessToken
    console.log(token)
    return [res, token]
  }

  return [signIn, result]
}

export default useSignIn
