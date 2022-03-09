import { gql } from "@apollo/client"

export const GET_TOKEN = gql`
  mutation getToken($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

// (
//     $username: String,
//      $password: String) {
//     authenticate(credentials: {
//         username: $username,
//         password: $password })
//          {
//       accessToken
//     }
//   }
