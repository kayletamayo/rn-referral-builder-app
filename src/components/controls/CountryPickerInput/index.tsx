import React from "react";
import { View } from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import { Text, useTheme } from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";

import { makeStyles } from "./styles";

interface CountryPickerInputProps {
  value: any;
  onCountrySelect: (value: CountryCode) => void;
  allowSearch?: boolean;
  title?: string;
  errorMessage?: string;
}

const CountryPickerInput: React.FC<CountryPickerInputProps> = ({ value = "", onCountrySelect, allowSearch = true, title, errorMessage }) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  const hasError = !!errorMessage;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.inputWrapper, hasError && styles.errorInput]}>
        <CountryPicker
          countryCode={value}
          onSelect={(country) => onCountrySelect(country.cca2)}
          withFilter={allowSearch}
          withCountryNameButton
          //@ts-ignore
          placeholder="Select..."
          containerButtonStyle={styles.inputStyle}
        />
        <View style={styles.arrowDown}>
          <Icon
            name="chevron-down"
            size={16}
            color={hasError ? theme.colors.error : theme.colors.outline}
          />
        </View>
      </View>
      {hasError && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
}

export default CountryPickerInput;