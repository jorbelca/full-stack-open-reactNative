import { Image, StyleSheet, Text, View } from "react-native"
import Numbers from "./Numbers"

const RepositoryItem = ({ data }) => {
  const styles = StyleSheet.create({
    container: {
      margin: 12,
    },
    logo: {
      width: 66,
      height: 58,
      borderRadius: 10,
      flex: 1,
    },
    top: {
      flex: 3,
      justifyContent: "space-evenly",
      marginLeft: 20,
    },
    
  })
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Image style={styles.logo} source={{ uri: `${data.ownerAvatarUrl}` }} />
        <View style={styles.top}>
          <Text style={{ fontWeight: "800" }}>{data.fullName}</Text>
          <Text> {data.description} </Text>

          <Text
            style={{
              color: "#fff",
              backgroundColor: "#0366d6",
              borderRadius: 10,
              width: "50%",
            }}
          >
            {data.language}
          </Text>
        </View>
      </View>

      <Numbers data={data} />
    </View>
  )
}

export default RepositoryItem
