import { useState, useEffect } from "react"
import { GET_REPOSITORIES } from "../graphQL/queries"
import { useQuery } from "@apollo/client"

const useRepositories = (val) => {
  const [repositories, setRepositories] = useState()
  const [loading, setLoading] = useState(false)

  const { data, error } = useQuery(GET_REPOSITORIES, {})

  const fetchRepositories = async () => {
    setLoading(true)

    const json = await data

    setLoading(false)
    setRepositories(json)
  }

  useEffect(() => {
    fetchRepositories()
  }, [val])

  return { repositories, loading, refetch: fetchRepositories }
}

export default useRepositories
