import { StyleSheet } from "react-native";
import { MD3Theme as ThemeProp } from "react-native-paper";

export const makeStyles = (theme: ThemeProp) =>
  StyleSheet.create({
    container: {
      paddingVertical: 8,
    },
    title: {
      fontWeight: "700",
    },
    errorMessage: {
      color: theme.colors.error,
      marginTop: 5,
    },
  });
