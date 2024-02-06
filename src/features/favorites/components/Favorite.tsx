import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

interface FavoriteProps {
  id: string;
  name: string;
}

export const Favorite = ({ id, name }: FavoriteProps) => {
  return (
    <Link component={RouterLink} to={`/beer/${id}`}>
      {name}
    </Link>
  );
};
