import { Formik } from "formik"
import { View, Button, StyleSheet, ScrollView } from "react-native"
import * as yup from "yup"
import FormikInput from "./FormikInput"

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
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
      marginVertical: 8,
      borderWidth: 1,
    },
  })
  const validationSchema = yup.object().shape({})
  return (
    <>
      <ScrollView style={styles.form}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <View>
            <FormikInput placeholder="Name" name="name" />
            <FormikInput
              placeholder="Password"
              name="password"
              secureTextEntry={true}
            />
            <Button style={styles.btn} color="#007AFF" title="Sign in"/>
          </View>
        </Formik>
      </ScrollView>
    </>
  )
}

export default SignIn
