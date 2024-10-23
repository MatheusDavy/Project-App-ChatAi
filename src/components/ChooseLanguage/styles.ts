import { FONT_SIZE } from "@/src/styles";
import { THEME } from "@/src/styles/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  label: {
    fontSize: FONT_SIZE.size_14,
    color: THEME.COLORS.PRIMARY,
    textAlign: 'center',
  },
  flag: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
  picker: {
    flex: 1,
    height: 'auto',
    color: THEME.FONTS.COLORS.PRIMARY,
    overflow: 'hidden'
  },
  pickerItem: {
    color: THEME.COLORS.PRIMARY,
  }
})