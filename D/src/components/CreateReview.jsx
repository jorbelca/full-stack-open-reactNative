import { Formik } from "formik"
import { View } from "react-native"

import { useNavigate } from "react-router-native"
import CreateReviewForm from "./CreateReviewForm"
import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphQL/mutations"

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  review: "",
}

const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW)
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values

    try {
      const { data } = await createReview({
        variables: {
          review: {
            ownerName,
            repositoryName,
            rating: Number(rating),
            text: review,
          },
        },
      })
      if (data.createReview.repositoryId) {
        navigate(`/repository/${data.createReview.repositoryId}`)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  )
}

export default CreateReview
