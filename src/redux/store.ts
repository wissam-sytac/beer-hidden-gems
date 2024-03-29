import { configureStore } from "@reduxjs/toolkit";
import { beersApi } from "../features/beers/redux/breweriesSlice";
import favoritesReducer from "../features/favorites/redux/favoritesSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import mainReducer from "../shared/redux/mainSlice";
import { thunk } from "redux-thunk";
import { useDispatch } from "react-redux";
import { LOCAL_STORAGE_KEY_FAVES } from "../config";

const persistConfig = {
  key: LOCAL_STORAGE_KEY_FAVES,
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesReducer);

const store = configureStore({
  reducer: {
    main: mainReducer,
    favorites: persistedReducer,
    [beersApi.reducerPath]: beersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(thunk)
      .concat(beersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch; // keep tyspecript happy!
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;

export const persistor = persistStore(store);
