import { FONT_FAMILY, FONT_SIZE, HEIGHT_SCREEEN, SPACINGS, WIDHT_SCREEN } from "@/src/styles";

import { THEME } from "@/src/styles/themes";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 28,
    gap: 15,
    paddingTop: 15,
  },

  image: {
    width: 100,
    height: 100,
    objectFit: 'contain',
    marginHorizontal: 'auto',
    marginTop: 20,
    marginBottom: 20,
  },

  input: {
    color: THEME.FONTS.COLORS.SECONDARY,
    backgroundColor: THEME.COLORS.TERTIARY,
    width: "100%",
    borderRadius: 10,
    height: 175,
    fontSize: FONT_SIZE.size_18,
    textAlignVertical: "top",
    padding: 10,
  },

  container: {
    backgroundColor: THEME.COLORS.SECONDARY,
    width: "100%",
    height: "100%",
  },

  output: {
    color: THEME.FONTS.COLORS.PRIMARY,
    backgroundColor: THEME.COLORS.QUATERNARY,
    width: "100%",
    borderRadius: 10,
    height: 175,
    fontSize: FONT_SIZE.size_18,
    textAlignVertical: "top",
    padding: 10,
  },

  options: {
    display: "flex",
    flexDirection: "row",
    gap: 31,
  },

  flag: {
    width: 30,
    height: 30,
    objectFit: "contain",
    marginBottom: 10,
  },
  translateButton: {
    backgroundColor: THEME.COLORS.PRIMARY,
    height: 70,

    borderRadius: 10,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },

  buttonText: {
    fontSize: THEME.FONTS.SIZE.MD,
    color: THEME.FONTS.COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    textAlign: "center",
  },
});
