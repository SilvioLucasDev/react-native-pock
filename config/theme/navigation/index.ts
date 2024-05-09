import { DefaultTheme } from '@react-navigation/native';
import { config as glueStackConfig } from '@/config/theme/gluestack';

const primaryColor = glueStackConfig.tokens.colors.primary500;

export const config = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
  },
};
