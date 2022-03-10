import { gql } from "@apollo/client"

export const LOGIN = gql`
  mutation ($username: String, $password: String) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
      user {
        id
        username
      }
    }
  }
`
export const CREATE_USER = gql`
  mutation createUser($username: String, $password: String) {
    createUser(user: { username: $username, password: $password }) {
      id
      username
    }
  }
`
