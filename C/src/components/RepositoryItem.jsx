import { View, StyleSheet } from "react-native"
import { Link } from "react-router-native"
import CardBody from "./CardBody"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "stretch",
  },
})

const RepositoryItem = ({ data }) => {
  return (
    <Link to={`/repository/${data.item.id}`}>
      <View style={cardStyles.container}>
        <CardHeader data={data} />
        <CardBody data={data} />
        <CardFooter data={data} />
      </View>
    </Link>
  )
}

export default RepositoryItem
