import { darkTheme } from "./dark";
import { lightTheme } from "./light";
import { Appearance } from "react-native";
import * as SystemUI from 'expo-system-ui';

const getThemes = () => {
  if (Appearance.getColorScheme() === "dark") {
    SystemUI.setBackgroundColorAsync(darkTheme.COLORS.SECONDARY);
    return darkTheme;
  } else {
    SystemUI.setBackgroundColorAsync(lightTheme.COLORS.SECONDARY);
    return lightTheme;
  }
};

export const THEME = getThemes();
