import { StyleSheet } from 'react-native';
import { MD3Theme as ThemeProp } from 'react-native-paper';

export const makeStyles = (theme: ThemeProp) =>
  StyleSheet.create({
    title: {
      fontWeight: "700",
      marginBottom: 5,
    },
    inputWrapper: {
      borderWidth: 1,
      height: 48,
      borderRadius: 5,
      borderColor: theme.colors.outline,
      justifyContent: "center",
    },
    container: {
      paddingVertical: 8,
    },
    inputStyle: {
      paddingHorizontal: 10,
    },
    errorInput: {
      borderColor: theme.colors.error,
      borderWidth: 2,
    },
    arrowDown: {
      position: "absolute",
      top: "40%",
      bottom: 0,
      right: 10,
    },
    errorMessage: {
      color: theme.colors.error,
      marginTop: 5,
    },
  });
