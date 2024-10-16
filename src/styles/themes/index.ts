import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import { Appearance } from "react-native";

const getThemes = () => {
  if (Appearance.getColorScheme() === "dark") {
    return darkTheme;
  } else {
    return lightTheme;
  }
};

export const THEME = getThemes();
