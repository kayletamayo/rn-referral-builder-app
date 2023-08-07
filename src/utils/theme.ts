import {
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { MD3Theme } from 'react-native-paper/lib/typescript/types';

export const colors = {
  primary500: "#388f4f",
  white: "#FFFFFF",
  neutral500: "#4d4f4d",
};

export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#388f4f",
    background: "#FFFFFF",
    surface: "#f5f5f6",
  },
};
