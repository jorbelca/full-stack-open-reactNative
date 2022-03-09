import { useMutation } from "@apollo/client"
import { GET_TOKEN } from "../graphQL/mutations"

const useSignIn = () => {
  const [mutate, result] = useMutation(GET_TOKEN)

  const signIn = async ({ username, password }) => {}
  return [signIn, result]
}

export default useSignIn
