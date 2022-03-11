import { Formik } from "formik"
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native"
import * as yup from "yup"

import FormikInput from "./FormikInput"

const CreateReview = () => {
  // const [register] = registerIn()

  // const onSubmit = async (values) => {
  //   const { username, password } = values
  //   try {
  //     const { data } = await register(username, password)

  //     await validationSchema.validate()
  //   } catch (e) {
  //     e
  //   }
  // }

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
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
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
                onChangeText={props.handleChange("username")}
                value={props.values.username}
              />
              <FormikInput
                placeholder="Repository Name"
                name="repositoryName"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <FormikInput
                placeholder="Rating"
                name="rating"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <FormikInput
                placeholder="Review"
                name="review"
                onChangeText={props.handleChange("password")}
                value={props.values.password}
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
