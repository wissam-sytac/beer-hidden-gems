import { AppDispatch } from "../../../redux/store";
import { showToast } from "../../../redux/mainSlice";
import { add, remove, removeAll } from "./favoritesSlice";

export const saveFave =
  (brewId: string, brewName: string) => async (dispatch: AppDispatch) => {
    dispatch(add({ brewId, brewName }));
    dispatch(showToast("Brewery successfully favorited"));
  };

export const deleteFave = (brewId: string) => async (dispatch: AppDispatch) => {
  dispatch(remove(brewId));
  dispatch(showToast("Brewery removed from favorite list"));
};

export const deleteAllFaves = () => async (dispatch: AppDispatch) => {
  dispatch(removeAll());
  dispatch(showToast("favorites cleared"));
};
