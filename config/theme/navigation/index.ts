import { DefaultTheme } from '@react-navigation/native';
import { config } from '@/config/theme/gluestack';

const primaryColor = config.tokens.colors.primary500;

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
  },
};
