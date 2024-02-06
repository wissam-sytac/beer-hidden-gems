import { Avatar, Button, ListItemAvatar, ListItemText } from "@mui/material";
import SportsBar from "@mui/icons-material/SportsBar";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import React from "react";
import { Beer } from "../../../shared/types";
import Divider from "@mui/material/Divider";

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
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>
            <SportsBar />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={beer.name} secondary={beer.brewery_type} />

        <Button
          onClick={onClickExplore(beer.id)}
          data-testid="btn-click-details"
        >
          see details
        </Button>
        <Button
          onClick={onClickAddToFaves(beer)}
          variant={isFavorited ? "outlined" : "contained"}
          startIcon={isFavorited ? <DeleteIcon /> : <AddIcon />}
          data-testid="btn-click-add"
        >
          {isFavorited ? "forget" : "save"}
        </Button>
      </ListItem>
      <Divider />
    </>
  );
};
