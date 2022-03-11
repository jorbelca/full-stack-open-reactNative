import { Formik } from "formik"

import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native"
import * as yup from "yup"
import registerIn from "../hooks/useRegister"

import FormikInput from "./FormikInput"

const RegisterUser = () => {
  const [register] = registerIn()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await register(username, password)
    } catch (e) {
      e
    }
  }

  const initialValues = {
    username: "",
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
      backgroundColor: "green",
      borderRadius: 8,
      padding: 5,
      marginTop: 30,
    },
  })
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, "must be at least 1 characters long")
      .max(30, "must be at maximum 30 characters long")
      .required("Username is required"),
    password: yup
      .string()
      .min(5, "must be at least 5 characters long")
      .max(50, "must be at maximum 50 characters long")
      .required("Password is required"),
    passwordConfirmation: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value
      })
      .required("Password Confirmation is required"),
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
                placeholder="Username"
                name="username"
                onChangeText={props.handleChange("username")}
                value={props.values.username}
              />
              <FormikInput
                placeholder="Password"
                name="password"
                secureTextEntry={true}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
              />
              <FormikInput
                placeholder="Password Confirmation"
                name="passwordConfirmation"
                secureTextEntry={true}
                onChangeText={props.handleChange("passwordConfirmation")}
                value={props.values.passwordConfirmation}
              />
              <Pressable
                style={styles.btn}
                onPress={props.handleSubmit}
                type="submit"
              >
                <View style={{ alignItems: "center", flex: 1 }}>
                  <Text style={{ color: "white" }}>Register User</Text>
                </View>
              </Pressable>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default RegisterUser
