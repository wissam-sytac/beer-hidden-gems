import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Toast {
  isVisible: boolean;
  message: string;
}

interface MainState {
  toast: Toast;
}

const initialState: MainState = {
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
  },
});

export default mainSlice.reducer;

export const { showToast, hideToast } = mainSlice.actions;
