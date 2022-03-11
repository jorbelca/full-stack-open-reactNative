import { Formik } from "formik"
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native"
import * as yup from "yup"

import FormikInput from "./FormikInput"

const CreateReview = () => {
  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, review } = values
    try {
      const { data } = await create(ownerName, repositoryName, rating, review)

      await validationSchema.validate()
    } catch (e) {
      e
    }
  }

  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    review: "",
  }
  const styles = StyleSheet.create({
    form: {
      backgroundColor: "white",
      flex: 1,
      padding: 20,
    },
    btn: {
      borderWidth: 1,
      flex: 1,
      backgroundColor: "coral",
      borderRadius: 8,
      padding: 5,
      marginTop: 30,
    },
  })
  const validationSchema = yup.object().shape({
    ownerName: yup.string().required("Repository owner name is required"),
    repositoryName: yup.string().required("Repository name is required"),
    rating: yup.number().required("Rating is required"),
  })

  return (
    <>
      <ScrollView style={styles.form}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => onSubmit(values)}
        >
          {(props) => (
            <View>
              <FormikInput
                placeholder="Repository owner name"
                name="ownerName"
                onChangeText={props.handleChange("ownerName")}
                value={props.values.username}
              />
              <FormikInput
                placeholder="Repository Name"
                name="repositoryName"
                onChangeText={props.handleChange("repositoryName")}
                value={props.values.password}
              />
              <FormikInput
                placeholder="Rating betwen 0 and 100"
                name="rating"
                onChangeText={props.handleChange("rating")}
                value={props.values.password}
              />
              <FormikInput
                placeholder="Review"
                name="review"
                onChangeText={props.handleChange("review")}
                value={props.values.password}
                multiline={true}
              />
              <Pressable
                style={styles.btn}
                onPress={props.handleSubmit}
                type="submit"
              >
                <View style={{ alignItems: "center", flex: 1 }}>
                  <Text style={{ color: "white" }}>Create Review</Text>
                </View>
              </Pressable>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default CreateReview
