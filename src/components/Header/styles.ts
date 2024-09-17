import { FONT_FAMILY, FONT_SIZE, WIDHT_SCREEN } from "@/src/styles";
import { THEME } from "@/src/styles/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    gap: 20,

    backgroundColor: THEME.COLORS.SECONDARY,

    paddingHorizontal: 20,
    paddingTop: 20 + 30,
    paddingBottom: 20,

    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.QUATERNARY
  },
  btnBack: {

  }
})

export const stylesButton = StyleSheet.create({
  container: {
    width: 42,
    height: 42,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius: 100,
    borderWidth: 2,
    borderColor: THEME.COLORS.QUATERNARY
  },
})

export const stylesDetail = StyleSheet.create({
  container: {
    zIndex: 10,
    position: 'absolute',
    left: WIDHT_SCREEN / 2,
    bottom: 0,

    borderRadius: 100,
    borderWidth: 2,
    borderColor: THEME.COLORS.QUATERNARY,
    
    paddingHorizontal:  20,
    paddingVertical: 5,
  },
  text: {
    fontSize: FONT_SIZE.size_14,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    color: THEME.FONTS.COLORS.PRIMARY,
    textAlign: 'center',
  }
})