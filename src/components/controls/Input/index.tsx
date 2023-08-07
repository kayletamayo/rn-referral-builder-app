import React from "react";
import { View, ViewStyle } from "react-native";
import { TextInput, Text, TextInputProps, TextInputIconProps } from 'react-native-paper';

import styles from './styles';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { StyleProp } from 'react-native';

interface InputProps extends TextInputProps {
  title?: string;
  icon?: IconSource;
  iconPosition?: 'left' | 'right';
  iconProps?: TextInputIconProps,
  inputWrapStyle?: StyleProp<ViewStyle>;
}

const Input: React.FC<InputProps> = ({ title, icon, iconPosition = 'left', iconProps, inputWrapStyle, ...inputProps }) => {
  return (
    <View style={[styles.container, inputWrapStyle]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        {...inputProps}
        left={
          iconPosition === "left" &&
          icon && <TextInput.Icon icon={icon} {...iconProps} />
        }
        right={
          iconPosition === "right" &&
          icon && <TextInput.Icon icon={icon} {...iconProps} />
        }
      />
    </View>
  );
}

export default Input;