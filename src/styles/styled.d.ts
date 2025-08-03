import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    color: string;
    font: string;
    headerBg: string;
    layout: "minimal" | "sidebar" | "card";
    sidebarBg?: string; 
  }
}
