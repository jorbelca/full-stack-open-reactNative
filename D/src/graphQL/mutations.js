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
  mutation ($user: CreateUserInput) {
    createUser(user: $user) {
      username
      id
    }
  }
`

export const CREATE_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      id
    }
  }
`

// mutation ($username: String, $password: String) {
//   createUser(user: { username: $username, password: $password }) {
//     id
//     username
//   }
// }
