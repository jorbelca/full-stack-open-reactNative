import { FlatList, StyleSheet, View, TextInput } from "react-native"
import RepositoryItem from "./RepositoryItem"
import { Picker } from "@react-native-picker/picker"
import { useState } from "react"
import { useLazyQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphQL/queries"
import * as React from "react"
import { Searchbar } from "react-native-paper"

export const RepositoryListContainer = ({ repositories }) => {
  // const [repo, setRepo] = useState([])
  const [searchQuery, setSearchQuery] = React.useState("")

  const onChangeSearch = (query) => setSearchQuery(query)
  const handlePicker = (value) => {
    if (value == "ASC") {
      variable = {
        orderBy: "RATING_AVERAGE",
        orderDirection: "ASC",
      }
    }
    if (value == "DESC") {
      variable = { orderBy: "RATING_AVERAGE", orderDirection: "DESC" }
    }
    if (value == "LAT") {
      variable = { orderBy: "ORDER_BY", orderDirection: "DESC" }
    }
  }
  let variable
  const ListHeader = () => {
    const [pick, { data, error }] = useLazyQuery(GET_REPOSITORIES, {
      variables: variable,
    })

    // setRepo(data)
    return (
      <>
        <RenderInput onChangeText={onChangeSearch} value={searchQuery} />
        {/* <TextInput
          style={styles.search}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        /> */}

        <View style={styles.pickerStyle}>
          <Picker
            style={styles.pickerStyle}
            mode={"dropdown"}
            onValueChange={(value) => {
              handlePicker(value)
              pick(variable)
            }}
          >
            <Picker.Item label="Latest repositories" value="LAT" />
            <Picker.Item label="Highest rated repositories" value="ASC" />
            <Picker.Item label="Lowest rated repositories" value="DESC" />
          </Picker>
        </View>
      </>
    )
  }

  // const repositoryNod = repo
  //   ? repo.repository.edges.map((element) => element.node)
  //   : []

  const repositoryNodes = repositories
    ? repositories.repositories.edges.map((element) => element.node)
    : []

  const renderItem = ({ item }) => {
    return <RepositoryItem data={item} key={item.id} />
  }

  return (
    <>
      {repositoryNodes ? (
        <FlatList
          testID="respositoryListContainer"
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(data) => data.id}
          renderItem={renderItem}
          ListHeaderComponent={ListHeader}
        />
      ) : (
        <FlatList
          testID="respositoryListContainer"
          data={repositoryNod}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(data) => data.id}
          renderItem={renderItem}
          ListHeaderComponent={ListHeader}
        />
      )}
    </>
  )
}

const ItemSeparator = () => <View style={styles.separator} />

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: "#ccc",
  },
  picker: {},
  search: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: -40,
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
})

export class RenderInput extends React.Component {
  render() {
    return (
      <TextInput
        style={styles.search}
        placeholder="Search"
        component={this.renderComp}
      />
    )
  }
}
