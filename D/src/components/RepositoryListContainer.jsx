import { FlatList, StyleSheet, View } from "react-native"
import RepositoryItem from "./RepositoryItem"

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.repositories.edges.map((element) => element.node)
    : []

  const renderItem = ({ item }) => {
    return <RepositoryItem data={item} key={item.id} />
  }
  return (
    <FlatList
      testID="respositoryListContainer"
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(data) => data.id}
      renderItem={renderItem}
    />
  )
}

const ItemSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#ccc",
  },
})
