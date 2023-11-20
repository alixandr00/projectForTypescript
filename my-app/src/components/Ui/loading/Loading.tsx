import { styled, CSSObject } from "@mui/system";
import React from "react";

export const Loading: React.FC = () => {
  return (
    <Container>
      <span className="loader" />
    </Container>
  );
};

const Container = styled("div")<CSSObject>`
  height: 100vh;
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
`;
