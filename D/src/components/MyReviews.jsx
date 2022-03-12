import { useQuery } from "@apollo/client"
import { ME } from "../graphQL/queries"

import { ReviewItem } from "./SingleRepo"

const MyReviews = () => {
  const { data } = useQuery(
    ME,
    { variables: { includeReviews: true } },
    { fetchPolicy: "cache-and-network" }

  )

  console.log(data)
  return <ReviewItem />
}

export default MyReviews
