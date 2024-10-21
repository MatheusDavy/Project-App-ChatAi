import { FONT_FAMILY, FONT_SIZE, HEIGHT_SCREEEN, SPACINGS, WIDHT_SCREEN } from "@/src/styles";

import { THEME } from "@/src/styles/themes";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: SPACINGS.container,
    backgroundColor: THEME.COLORS.SECONDARY,
  },
  logo: {
    width: '80%',
    height: 200,
    maxWidth: 200,
    objectFit: 'contain',
  },
  title: {
    fontSize: FONT_SIZE.size_20,
    color: THEME.FONTS.COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    textAlign: 'center',
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
    marginTop: 30
  },
  contentCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    backgroundColor: THEME.COLORS.TERTIARY,
    borderRadius: 30,
    width: '47%',
    borderColor: THEME.COLORS.QUATERNARY,
    borderWidth: 2
  },
  contentCardText: {
    fontSize: FONT_SIZE.size_18,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    color: THEME.FONTS.COLORS.PRIMARY,
    textAlign: 'center',
  }
})