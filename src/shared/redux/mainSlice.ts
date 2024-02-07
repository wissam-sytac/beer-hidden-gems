import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Toast {
  isVisible: boolean;
  message: string;
}

interface MainState {
  isOnline: boolean;
  toast: Toast;
}

const initialState: MainState = {
  isOnline: navigator.onLine,
  toast: {
    isVisible: false,
    message: "yes",
  },
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<string>) => {
      state.toast = {
        isVisible: true,
        message: action.payload,
      };
    },
    hideToast: (state, action: PayloadAction<void>) => {
      state.toast = {
        ...state.toast,
        isVisible: false,
        message: "",
      };
    },
    updateOnlineStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export default mainSlice.reducer;

export const { showToast, hideToast, updateOnlineStatus } = mainSlice.actions;
