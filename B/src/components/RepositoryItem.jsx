import { Button, Image, Pressable, StyleSheet, Text, View } from "react-native"
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
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-around",
      marginLeft: 20,
    },
  })
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Image style={styles.logo} source={{ uri: `${data.ownerAvatarUrl}` }} />
        <View style={styles.top}>
          <Text style={{ fontWeight: "800" }}>{data.fullName}</Text>
          <Text> {data.description} </Text>

          <View>
            <Pressable
              style={{
                alignItems: "flex-start",
                backgroundColor: "#0366d6",
                color: "#fff",
                borderRadius: 3,
                padding: 3,
                paddingLeft: 3,
                width: "43%",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  justifyContent: "center",
                  fontWeight: "400",
                }}
              >
                {data.language}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Numbers data={data} />
    </View>
  )
}

export default RepositoryItem
