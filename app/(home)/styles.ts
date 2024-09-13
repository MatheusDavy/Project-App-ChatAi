import { FONT_FAMILY, FONT_SIZE, SPACINGS } from "@/styles";

import { THEME } from "@/styles/themes";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: SPACINGS.container,

    backgroundColor: THEME.COLORS.SECONDARY,
  },
  title: {
    fontSize: FONT_SIZE.size_20,
    color: THEME.FONTS.COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },
  logo: {
    width: '80%',
    height: 295,
    maxWidth: 295,
    objectFit: 'contain',
  },
  text: {
    fontSize: FONT_SIZE.size_40,
    color: THEME.FONTS.COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    lineHeight: FONT_SIZE.size_40,
    textAlign: 'center'
  },
  subtext: {
    fontSize: FONT_SIZE.size_14,
    color: THEME.FONTS.COLORS.SECONDARY,
    fontFamily: FONT_FAMILY.poppinsRegular,
    textAlign: 'center',
    lineHeight: FONT_SIZE.size_14 + 4,
    marginTop: 10,
  },
  linkWrapper: {
    backgroundColor: THEME.COLORS.PRIMARY,
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 1000,
    marginBottom: 30
  },
  linkText: {
    fontSize: 20,
    color: THEME.FONTS.COLORS.SECONDARY,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    textAlign: 'center',
  }
})