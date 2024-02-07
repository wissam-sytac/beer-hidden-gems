import { RootState } from "../../redux/store";

export const selectOnlineStatus = (state: RootState) => state.main.isOnline;
