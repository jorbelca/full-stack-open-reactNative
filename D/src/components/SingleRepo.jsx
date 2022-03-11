import { useQuery } from "@apollo/client"
import { Button, Text, FlatList, View, StyleSheet } from "react-native"
import { useParams } from "react-router-native"
import { SINGLE_REPO } from "../graphQL/queries"
import RepositoryItem from "./RepositoryItem"
import * as Linking from "expo-linking"
import { format } from "date-fns"

const SingleRepo = () => {
  const { id } = useParams((n) => n.id)

  const { data } = useQuery(
    SINGLE_REPO,
    { variables: { id } },
    { fetchPolicy: "cache-and-network" }
  )

  return (
    <>
      {data ? <RepositoryItem data={data.repository} /> : <Button title="" />}

      <Button
        onPress={() => Linking.openURL(data.repository.url)}
        title="Open in Github"
        color={"blue"}
      />
      {data ? (
        <ReviewItem data={data.repository.reviews} />
      ) : (
        <Button title="" />
      )}
    </>
  )
}

export default SingleRepo

const ReviewItem = ({ data }) => {
  const reviews = data ? data.edges.map((element) => element.node) : []

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

const ItemSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#ccc",
  },
  reviewsContainer: {
    margin: 10,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  reviewsRating: {
    flex: 1,
    width: 1,
    height: 70,
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "blue",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  reviewsText: {
    flex: 3,
  },
})

const renderItem = ({ item }) => {
  const date = format(new Date(item.createdAt), "MM.dd.yyyy")
  return (
    <View style={styles.reviewsContainer}>
      <View style={styles.reviewsRating}>
        <Text>{item.rating}</Text>
      </View>
      <View style={styles.reviewsText}>
        <Text style={{ fontWeight: "bold" }}>{item.user.username}</Text>
        <Text style={{ marginBottom: 10 }}>{date}</Text>
        <Text>{item.text}</Text>
      </View>
    </View>
  )
}
