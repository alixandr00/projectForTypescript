import React, { forwardRef, Ref } from "react";
import { TextField, styled, Theme } from "@mui/material";

interface TextAreaProps {
  type?: string;
  borderRadius?: string;
  placeholder?: string;
  width?: string;
  padding?: string;
}

export const TextArea = forwardRef(
  (props: TextAreaProps, ref: Ref<HTMLInputElement>) => {
    const { type, borderRadius, placeholder, width, padding, ...rest } = props;

    return (
      <StyledInput
        type={type}
        ref={ref}
        placeholder={placeholder}
        width={width}
        padding={padding}
        {...rest}
      />
    );
  }
);

interface StyledInputProps {
  width?: string;
  borderRadius?: string;
  padding?: string;
}

const StyledInput = styled(TextField)<StyledInputProps, Theme>((props) => ({
  width: props.width,
  borderRadius: props.borderRadius,
  padding: props.padding,
}));
