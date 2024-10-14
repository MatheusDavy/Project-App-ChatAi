import { FONT_FAMILY, FONT_SIZE, HEIGHT_SCREEEN, SPACINGS, WIDHT_SCREEN } from "@/src/styles";

import { THEME } from "@/src/styles/themes";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.SECONDARY,
    minHeight: HEIGHT_SCREEEN,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  conversationsContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    height: 'auto',
    zIndex: 10,
    position: 'relative',
    marginBottom: 30,
  },
  consversationMessagesWrapper: {
    maxWidth: '80%',
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  conversationMessages: {
    maxWidth: '100%',
    width: 'auto',
    padding: 10,
    fontSize: 16,
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-end',
    gap: 10,

    width: '90%',
    marginHorizontal: 'auto',
    marginBottom: 30

  },
  input: {
    color: THEME.FONTS.COLORS.PRIMARY,
    fontSize: FONT_SIZE.size_18,
    fontFamily: FONT_FAMILY.poppinsSemibold,
    
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: THEME.COLORS.QUATERNARY,
    backgroundColor: THEME.COLORS.TERTIARY,
  },

  send: {
    width: 45,
    height: 45,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 100,
  },

  dotsTyping: {
    backgroundColor: 'transparent',
    transform: [{
      scale: 2,
    }]
  }
});