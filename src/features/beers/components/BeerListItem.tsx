import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material";
import SportsBar from "@mui/icons-material/SportsBar";
import ListItem from "@mui/material/ListItem";
import React from "react";
import { Beer } from "../../../shared/types";

interface BeerListProps {
  beer: Beer;
  isFavorited: boolean;
  onClickExplore: (a: string) => any;
  onClickAddToFaves: (a: Beer) => any;
}

export const BeerListItem = ({
  beer,
  isFavorited,
  onClickAddToFaves,
  onClickExplore,
}: BeerListProps) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>
          <SportsBar />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={beer.name} secondary={beer.brewery_type} />
      <Button onClick={onClickExplore(beer.id)}>see details</Button>
      <Button
        onClick={onClickAddToFaves(beer)}
        variant={isFavorited ? "outlined" : "contained"}
      >
        {isFavorited ? "remove from faves" : "add to faves"}
      </Button>
    </ListItem>
  );
};
