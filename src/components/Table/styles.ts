import { StyleSheet } from 'react-native';
import { MD3Theme as ThemeProp } from 'react-native-paper';

export const makeStyles = (theme: ThemeProp) =>
  StyleSheet.create({
    dataHeader: {
      backgroundColor: theme.colors.surfaceDisabled,
    },
    emptyList: {
      paddingVertical: 12,
      flex: 1,
      alignItems: "center",
    },
    actions: {
      flex: 1,
      justifyContent: "flex-end",
      marginRight: 10,
    },
    actionTitle: {
      flex: 1,
    },
    dataTable: {
      flexDirection: "row",
    }
  });