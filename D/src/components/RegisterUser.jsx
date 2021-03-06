import { Formik } from "formik"

import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native"
import * as yup from "yup"


import FormikInput from "./FormikInput"

const RegisterUser = () => {
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
