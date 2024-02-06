import { Checkbox, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

interface FavoriteProps {
  id: string;
  name: string;
  onClick?: () => void;
}

export const Favorite = ({ id, name, onClick }: FavoriteProps) => {
  return (
    <li key={id}>
      <Checkbox />
      <Link component={RouterLink} to={`/beer/${id}`}>
        {name}
      </Link>
    </li>
  );
};
