import { useState, useEffect } from "react"
import { GET_REPOSITORIES } from "../graphQL/queries"
import { useQuery } from "@apollo/client"

const useRepositories = ({ orderDirection, orderBy }, keyword) => {
  const [repositories, setRepositories] = useState()

  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: { orderDirection, orderBy, searchKeyword: keyword },
    fetchPolicy: "cache-and-network",
  })

  const fetchRepositories = async () => {
    if (!loading) {
      setRepositories(data.repositories)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [loading])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
