import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

export const LoadingSpinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
};
