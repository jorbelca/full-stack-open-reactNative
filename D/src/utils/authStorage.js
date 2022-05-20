import AsyncStorage from "@react-native-async-storage/async-storage"

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`)

    return token ? JSON.parse(token) : []
  }

  async setAccessToken(accessToken) {
    AsyncStorage.setItem(`${this.namespace}:token`, JSON.stringify(accessToken))
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:token`)
      return true
    } catch (e) {
      console.error(e)
      return false
    }
  }
}

export default AuthStorage
