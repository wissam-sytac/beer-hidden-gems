import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { FavoriteRecord, FavoritesState } from "./favoritesSlice";

export const favoritesAsList = (faves: FavoritesState) =>
  Object.values(faves.data).filter((val) => val) as FavoriteRecord[];

export const selectFavoritesAsList = createSelector(
  [(state: RootState) => state.favorites],
  favoritesAsList,
);
