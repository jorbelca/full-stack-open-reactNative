import { Formik } from "formik"
import { useEffect } from "react"
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native"
import * as yup from "yup"
import useSignIn from "../hooks/useSignIn"
import FormikInput from "./FormikInput"

const SignIn = () => {
  const onSubmit = async (values) => {
    try {
      await validationSchema.validate()
    } catch (e) {
      e
    }
    useSignIn()
    // console.log(values)
  }
  const initialValues = {
    name: "",
    password: "",
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
      backgroundColor: "#007AFF",
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
          onSubmit={onSubmit}
        >
          <View>
            <FormikInput placeholder="Username" name="username" />
            <FormikInput
              placeholder="Password"
              name="password"
              secureTextEntry={true}
            />
            <Pressable style={styles.btn} onPress={onSubmit}>
              <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ color: "white" }}>Sign In</Text>
              </View>
            </Pressable>
          </View>
        </Formik>
      </ScrollView>
    </>
  )
}

export default SignIn
