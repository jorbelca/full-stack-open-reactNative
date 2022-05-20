import { Platform } from "react-native"

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    alert: "#d73a4a",
    textWhite: "#ffffff",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },

  fontWeights: {
    normal: "400",
    bold: "700",
  },
  fonts: Platform.select({
    android: {
      fontFamily: "Roboto",
    },
    ios: { fontFamily: "Arial" },
    default: { fontFamily: "System" },
  }),
}

export default theme
