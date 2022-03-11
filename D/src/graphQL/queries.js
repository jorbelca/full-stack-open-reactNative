import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          ownerName
          ownerAvatarUrl
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`

export const SINGLE_REPO = gql`
  query ($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      description
      ownerName
      ownerAvatarUrl
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`
