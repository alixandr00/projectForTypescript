import { Button as ReusableButton, styled } from "@mui/material";

export const UiButton = ({ ...rest }) => {
  return <ButtonStyled type="submit">UiButton</ButtonStyled>;
};

const ButtonStyled = styled(ReusableButton)((props) => ({
  background: props.background || `linear-gradient(to right, #49318C, #3F5FB0)`,
  color: props.color || "#ffffff",
  borderRadius: props.borderRadius || "0.625rem",
  display: "flex",
  justifyContent: props.justifyContent || "center",
  alignItems: props.alignItems || "center",
  fontSize: props.fontSize,
  padding: props.padding || "0.5rem 1rem",
  //    alignItems: 'flex-start',
  border: props.border || "none",
  width: props.width || "7.5rem",
  height: props.height || "2rem",
  "&:hover": {
    background: props.backgroundhover,
    color: props.color,
  },
  "&:disabled": {
    background: props.background || "#B2B2B2",
    color: "#FFFFFF",
  },
  "&.MuiButtonBase-root": {
    textTransform: "none",
  },
}));
