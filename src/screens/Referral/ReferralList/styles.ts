import { StyleSheet } from 'react-native';
import { MD3Theme as ThemeProp } from "react-native-paper/lib/typescript/types";

export const makeStyles = (theme: ThemeProp) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors?.background,
      paddingTop: 10,
    },
    wrap: {
      paddingHorizontal: 20,
    },
    filterRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 5,
      paddingVertical: 15,
    },
    filterBtnLabel: {
      color: theme.colors.secondary,
      fontSize: 16,
    },
    filterBtn: {
      borderRadius: 10,
      paddingVertical: 5,
    },
    searchContentStyle: {
      backgroundColor: theme.colors.surface,
    },
    emailColumn: {
      color: theme.colors.secondary
    },
    nameCell: {
      flex: 3,
    },
    phoneCell: {
      flex: 2,
    },
  });