import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Numbers = ({ data }) => {
  const styles = StyleSheet.create({
    foot: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 20,
      flexWrap: "wrap",
    },
  })
  function kConverter(num) {
    return num <= 999
      ? num
      : (0.1 * Math.floor(num / 100)).toFixed(1).replace(".0", "") + "k"
  }
  const stargazersCount = kConverter(data.stargazersCount)
  const forksCount = kConverter(data.forksCount)

  return (
    <View style={styles.foot}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>{stargazersCount}</Text>
        <Text>Stars </Text>
      </View>

      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>{forksCount} </Text>
        <Text> Forks </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>{data.reviewCount}</Text>
        <Text>Reviews </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontWeight: "bold" }}>{data.ratingAverage}</Text>
        <Text>Rating</Text>
      </View>
    </View>
  )
}

export default Numbers
