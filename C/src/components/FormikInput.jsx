import { StyleSheet, Text } from "react-native"
import { useField } from "formik"

import TextInput from "./TextInput"
import theme from "../theme"

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.alert,
    borderColor: "transparent",
  },
  form: {
    marginTop: 20,
    padding: 10,
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1.2,
  },
})

const FormikInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error
  
  return (
    <>
      <TextInput
        style={styles.form}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikInput
