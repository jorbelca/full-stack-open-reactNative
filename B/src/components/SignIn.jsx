import { Formik } from "formik"
import { View, Button, StyleSheet, ScrollView } from "react-native"
import * as yup from "yup"
import FormikInput from "./FormikInput"

const SignIn = () => {
  const onSubmit = async (values) => {
    try {
      await validationSchema.validate()
    } catch (e) {
      e
    }
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
            <Button
              style={styles.btn}
              color="#007AFF"
              title="Sign in"
              onPress={(event) => onSubmit(event.target)}
            />
          </View>
        </Formik>
      </ScrollView>
    </>
  )
}

export default SignIn
