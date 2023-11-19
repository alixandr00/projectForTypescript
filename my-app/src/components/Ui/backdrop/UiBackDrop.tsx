import { styled, CSSObject } from "@mui/system";
import React from "react";

interface UiBackdropProps {
  open: boolean;
  onClose: () => void;
}

const BackDrop = styled("div")<CSSObject>(({ open }: UiBackdropProps) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  display: open ? "block" : "none",
}));

export const UiBackdrop: React.FC<UiBackdropProps> = ({ open, onClose }) => {
  return <BackDrop onClick={onClose} open={open} />;
};
