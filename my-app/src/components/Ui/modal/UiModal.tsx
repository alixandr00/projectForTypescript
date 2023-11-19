import { Box, styled, Backdrop as MuiBackdrop } from "@mui/material";
import React from "react";

interface UiModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  [key: string]: any; // Rest props
}

export const UiModal: React.FC<UiModalProps> = ({
  open,
  onClose,
  children,
  ...rest
}) => {
  return (
    <Backdrop open={open} onClick={onClose}>
      <ModalStyle {...rest}>{children}</ModalStyle>
    </Backdrop>
  );
};
const ModalStyle = styled(Box)(({ ...rest }: { [key: string]: any }) => ({
  position: "fixed",
  borderRadius: rest.borderRadius || "1rem",
  backgroundColor: rest.backgroundColor || "none",
  maxHeight: "100vh",
}));

const Backdrop = styled(MuiBackdrop)(({ ...rest }: { [key: string]: any }) => ({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  width: "100%",
  height: "100vh",
  backgroundColor: "rgba(240, 230, 230, 0.288)",
  backdropFilter: rest.backdropFilter || "blur(2px)",
  zIndex: "990",
}));
