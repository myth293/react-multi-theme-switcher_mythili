import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeType = "minimal" | "sidebar" | "card";

interface ThemeState {
  selectedTheme: ThemeType;
}

const initialState: ThemeState = {
  selectedTheme:
    (localStorage.getItem("selectedTheme") as ThemeType) || "minimal",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeType>) {
      state.selectedTheme = action.payload;
      localStorage.setItem("selectedTheme", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
