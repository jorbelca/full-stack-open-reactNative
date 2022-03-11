import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphQL/mutations"

const registerIn = () => {
  const [createUser, { data }] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.error(error)
    },
  })

  const register = async (username, password) => {
    createUser({
      createUserUser: { username: username, password: password },
    })
  }
  console.log(data)
  return [register, data]
}

export default registerIn
