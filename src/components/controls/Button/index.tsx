import React from 'react';
import { Button as PaperButton, ButtonProps } from "react-native-paper";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const Button: React.FC<Omit<CustomButtonProps, "children">> = ({ label, ...btnProps }) => {
  return (
    <PaperButton {...btnProps}>
      {label}
    </PaperButton>
  )
}

export default Button;