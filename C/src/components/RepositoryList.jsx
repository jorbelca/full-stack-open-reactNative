import { FlatList, View, StyleSheet } from "react-native"
import useRepositories from "../hooks/useRepositories"
import RepositoryItem from "./RepositoryItem"

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#ccc",
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories } = useRepositories()

  const repositoryNodes = repositories
    ? repositories.repositories.edges.map((element) => element.node)
    : []

  const renderItem = ({ item }) => {
    return <RepositoryItem data={item} key={item.id} />
  }
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(data) => data.id}
      renderItem={renderItem}
    />
  )
}

export default RepositoryList
