import { FONT_FAMILY, FONT_SIZE, SPACINGS, WIDHT_SCREEN } from "@/src/styles";

import { THEME } from "@/src/styles/themes";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: SPACINGS.container,
    paddingBottom: SPACINGS.container,
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
    marginTop: 30
  },
  text: {
    fontSize: WIDHT_SCREEN * 0.09,
    color: THEME.FONTS.COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    lineHeight: WIDHT_SCREEN * 0.09,
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
    marginTop: 30,
  },
  linkText: {
    fontSize: 20,
    color: THEME.FONTS.COLORS.SECONDARY,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    textAlign: 'center',
  }
})