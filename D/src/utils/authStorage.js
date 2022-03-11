import AsyncStorage from "@react-native-async-storage/async-storage"

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace
  }

  async getAccessToken() {
    try {
      const value = await AsyncStorage.getItem(`${this.namespace}:token`)
      if (value !== null) {
        return value
      }
    } catch (e) {
      console.error(e)
    }
    console.log("READ")
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(
        `${this.namespace}:token`,
        JSON.stringify(accessToken)
      )
    } catch (e) {
      console.error(e)
    }
    console.log("SET")
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:token`)
    } catch (e) {
      console.error(e)
    }
    console.log("REMOVED")
  }
}

export default AuthStorage

// export const setToken = async (token) => {
//   try {
//     console.log(token)
//     await AsyncStorage.setItem("token", JSON.stringify(token))
//   } catch (e) {
//     console.error(e)
//   }
// }

// export const readToken = async () => {
//   try {
//     console.log("READ")
//     const value = await AsyncStorage.getItem("token")
//     if (value !== null) {
//       return value
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

// export const removeToken = async () => {
//   try {
//     await AsyncStorage.removeItem("token")
//   } catch (e) {
//     console.error(e)
//   }
//   console.log("REMOVED")
// }
