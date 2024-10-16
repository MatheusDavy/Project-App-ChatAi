import { FONT_FAMILY, FONT_SIZE, HEIGHT_SCREEEN, SPACINGS, WIDHT_SCREEN } from "@/src/styles";

import { THEME } from "@/src/styles/themes";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.SECONDARY,
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },

  image: {
    width: 200,
    height: 200,
    objectFit: 'contain',
    marginHorizontal: 'auto',
    marginTop: 50
  },

  responseContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    backgroundColor: THEME.COLORS.QUATERNARY,
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    flex: 1,
  },
  responseResult: {
    color: THEME.FONTS.COLORS.PRIMARY,
    fontSize: FONT_SIZE.size_18,
    fontFamily: FONT_FAMILY.poppinsRegular,
    flex: 1,
  },
  responseActions: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 20,
  },

  input: {
    color: THEME.FONTS.COLORS.PRIMARY,
    fontSize: FONT_SIZE.size_18,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    maxHeight: 100,
    minHeight: 60,
    height: 'auto',
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 30,
    
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: THEME.COLORS.QUATERNARY,
    backgroundColor: THEME.COLORS.TERTIARY,
  },
  send: {
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 5,
    width: '90%',
    marginHorizontal: 'auto',
    marginTop: 10,
  },
  dotsTyping: {
    backgroundColor: 'transparent',
    transform: [{
      scale: 2,
    }]
  },

  waiting: {
    width: 200,
    height: 200,
    margin: 'auto',
    position: 'relative',
    zIndex: 2,
  },
});