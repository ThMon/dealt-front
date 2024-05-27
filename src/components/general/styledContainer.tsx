// src/components/StyledContainer.tsx
"use client"; // Ensures this component is treated as a client component

import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const StyledContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: 800,
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: 360,
  },
}));

const ClientStyledContainer = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ClientStyledContainer;
