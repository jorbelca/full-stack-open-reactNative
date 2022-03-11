import { useMutation } from "@apollo/client"
import { CREATE_USER } from "../graphQL/mutations"

const registerIn = () => {
  const [createUser, { data }] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.error(error.graphQLErrors[0].message)
    },
  })

  const register = async (username, password) => {
    console.log(username, password)
    const res = await createUser({
      variables: {
        user: { username, password },
      },
    })

    const { id } = res.data.createUser
    console.log(id)
  }

  return [register, data]
}

export default registerIn
