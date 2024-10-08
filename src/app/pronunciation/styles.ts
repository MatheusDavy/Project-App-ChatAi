import { StyleSheet } from "react-native";

import { FONT_FAMILY, FONT_SIZE, HEIGHT_SCREEEN, SPACINGS, WIDHT_SCREEN } from "@/src/styles";

import { THEME } from "@/src/styles/themes";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.SECONDARY,
    minHeight: HEIGHT_SCREEEN,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: FONT_SIZE.size_20,
    color: THEME.FONTS.COLORS.PRIMARY,
    fontFamily: FONT_FAMILY.poppinsRegular,
  },


  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '100%',
    paddingHorizontal: 30,
    gap: 10,
  },
  input: {
    color: THEME.FONTS.COLORS.PRIMARY,
    fontSize: FONT_SIZE.size_18,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    borderBottomWidth: 2,
    borderBottomColor: THEME.COLORS.QUATERNARY,
    flex: 1,
  },
  inputEdit: {
    width: 40,
    height: 40,

    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 4,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingBottom: 40,
    marginTop: 40,
  },
  actionsButton: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
  }
})

export const stylesMarbles = StyleSheet.create({
  marbles: {
    width: '80%',
    height: 'auto',
    marginHorizontal: 'auto',
    marginTop: 30,
    aspectRatio: 1,
    objectFit: 'contain'
  },
})

export const stylesPulse = StyleSheet.create({
  circles: {
    width: 130,
    height: 130,
    position: 'absolute',
    left: '50%',
    top: '50%',
    zIndex: 0
  }
})

export const stylesModal = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1000,
    width: "100%",
    height: "100%",
    backgroundColor: THEME.COLORS.SECONDARY,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    left: SPACINGS.container,
    top: SPACINGS.container + 40,

    width: 42,
    height: 42,
    zIndex: 100,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    borderRadius: 100,
    borderWidth: 2,
    borderColor: THEME.COLORS.QUATERNARY
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: SPACINGS.container
  },
  normalWord: {
    color: THEME.FONTS.COLORS.PRIMARY,
    fontSize: FONT_SIZE.size_20,
    fontFamily: FONT_FAMILY.poppinsSemibold
  },
  differentWord: {
    color: THEME.COLORS.RED,
    fontSize: FONT_SIZE.size_20,
    fontFamily: FONT_FAMILY.poppinsSemibold
  },
  animation: {
    position: 'absolute',
    height: WIDHT_SCREEN * 2,
    width: WIDHT_SCREEN * 2,
    objectFit: 'contain',
  }
})

export const stylesPopup = StyleSheet.create({
  container: {
    position: 'absolute',
    left: '2.5%',
    bottom: 20,
    
    width: '95%',

    backgroundColor: THEME.COLORS.PRIMARY,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text:{
    flex: 1,
    fontSize: FONT_SIZE.size_18,
    color: THEME.FONTS.COLORS.PRIMARY,
  },
})