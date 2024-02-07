import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Favorite {
  brewId: string;
  brewName: string;
}

export interface FavoriteRecord extends Favorite {
  createdOn: string;
}

export interface FavoritesState {
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
          createdOn: new Date().toISOString(),
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
