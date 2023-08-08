import { StyleSheet } from 'react-native';
import { MD3Theme as ThemeProp } from 'react-native-paper/lib/typescript/types';

export const makeStyles = (theme: ThemeProp) =>
  StyleSheet.create({
    keyboardView: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors?.background,
      paddingHorizontal: 20,
    },
    headerTitle: {
      marginTop: 10,
    },
    sectionList: {
      flex: 1,
    },
    submitBtn: {
      marginVertical: 30,
      borderRadius: 10,
      paddingVertical: 5,
      marginHorizontal: 10,
    },
    sectionTitleContainer: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.surfaceVariant,
      paddingTop: 10,
      paddingBottom: 15,
    },
    sectionTitle: {
      fontWeight: "700",
      color: theme.colors.secondary,
      paddingBottom: 10,
      paddingTop: 5,
    },
  });
