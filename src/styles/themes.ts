import { DefaultTheme } from "styled-components";
import { ThemeType } from "../redux/themeSlice";

export const themes: Record<ThemeType, DefaultTheme> = {
  minimal: {
    background: "#ffffff",
    color: "#000000",
    font: "Arial, sans-serif",
    headerBg: "#f0f0f0",
    layout: "minimal",
  },
  sidebar: {
    background: "#1e1e1e",
    color: "#d4d4d4",
    font: "'Georgia', serif",
    headerBg: "#252526",
    layout: "sidebar",
  },
  card: {
    background: "#f5f0e6", 
    color: "#4b2e2e", 
    font: "'Pacifico', cursive", 
    headerBg: "#a9746e", 
    layout: "card",
  },
};
