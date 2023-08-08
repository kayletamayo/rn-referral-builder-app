import React from "react";
import { View, ViewStyle } from "react-native";
import { TextInput, Text, TextInputProps, TextInputIconProps } from 'react-native-paper';

import { makeStyles } from './styles';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { StyleProp } from 'react-native';
import { useTheme } from 'react-native-paper';

interface InputProps extends TextInputProps {
  title?: string;
  icon?: IconSource;
  iconPosition?: 'left' | 'right';
  iconProps?: TextInputIconProps,
  inputWrapStyle?: StyleProp<ViewStyle>;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  title,
  icon,
  iconPosition = "left",
  iconProps,
  inputWrapStyle,
  errorMessage,
  ...inputProps
}) => {
  const theme = useTheme();
  const styles = makeStyles(theme);

  return (
    <View style={[styles.container, inputWrapStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        left={
          iconPosition === "left" &&
          icon && <TextInput.Icon icon={icon} {...iconProps} />
        }
        right={
          iconPosition === "right" &&
          icon && <TextInput.Icon icon={icon} {...iconProps} />
        }
        autoCorrect={false}
        autoCapitalize="none"
        error={!!errorMessage}
        {...inputProps}
      />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  );
};

export default Input;