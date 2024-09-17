import { StyleSheet } from 'react-native';
import { THEME } from '@/src/styles/themes';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { FONT_FAMILY, FONT_SIZE } from '@/src/styles';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: (initialWindowMetrics?.insets.top || 0) + 44,
    padding: 16,
    borderRadius: 4,
  },
  text: {
    color: THEME.FONTS.COLORS.PRIMARY,
    fontSize: FONT_SIZE.size_18,
    fontFamily: FONT_FAMILY.poppinsRegular,
    textAlign: 'center',
  }
});