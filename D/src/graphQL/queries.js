import { gql } from "@apollo/client"

export const GET_REPOSITORIES = gql`
  query ($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
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
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      username
      id
      reviews @include(if: $includeReviews) {
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
          cursor
        }
        pageInfo {
          hasNextPage
        }
      }
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

export const FIND_REPO = gql`
  query ($searchKeyword: String) {
    repositories(searchKeyword: $searchKeyword) {
      edges {
        node {
          fullName
        }
      }
    }
  }
`

export const INFINITE_SCROLL = gql`
  query ($first: Int, $after: String) {
    repositories(first: $first, after: $after) {
      totalCount
      edges {
        node {
          id
          fullName
          createdAt
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`
