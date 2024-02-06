import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/store";
import { FavoriteRecord } from "./favoritesSlice";

export const selectFavoritesAsList = createSelector(
  [(state: RootState) => state.favorites],
  (faves) => Object.values(faves.data).filter((val) => val) as FavoriteRecord[],
);
