import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../../redux/store";
import { showToast } from "../../../redux/mainSlice";

export interface Favorite {
  brewId: string;
  brewName: string;
}

export interface FavoriteRecord extends Favorite {
  createdOn: string;
}

interface FavoritesState {
  data: Record<string, FavoriteRecord | undefined>;
}

const initialState: FavoritesState = {
  data: {},
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Favorite>) => {
      state.data = {
        ...state.data,
        [action.payload.brewId]: {
          brewId: action.payload.brewId,
          brewName: action.payload.brewName,
          createdOn: new Date().toDateString(),
        },
      };
    },
    remove: (state, action: PayloadAction<string>) => {
      state.data = {
        ...state.data,
        [action.payload]: undefined,
      };
    },
    removeAll: (state, action: PayloadAction<void>) => {
      state.data = {};
    },
  },
  extraReducers: (builder) => {},
});

export const { add, remove, removeAll } = favoritesSlice.actions;

export default favoritesSlice.reducer;
