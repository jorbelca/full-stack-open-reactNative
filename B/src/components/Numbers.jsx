import React from "react"
import { StyleSheet, Text, View } from "react-native"

const Numbers = ({ data }) => {
  const styles = StyleSheet.create({
    foot: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      marginTop: 20,
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
      <View style={{ flex: 1 }}>
        <Text>
          {stargazersCount}
          {forksCount}
          {data.reviewCount}
          {data.ratingAverage}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text>Stars Forks Reviews Rating</Text>
      </View>
    </View>
  )
}

export default Numbers
