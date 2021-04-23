import * as React from 'react';
import { useTheme } from '../context/themeContext';
import {
  ThemeContainer,
  ThemeBox,
  ThemeIcon,
  ThemeBtn
} from '../styling/themeToggle.styling';

export default function ThemeToggle() {

  const { theme, updateTheme } = useTheme();

  return (
    <ThemeContainer>
      <ThemeBox onClick={() => updateTheme(theme)} theme={theme}>
        <ThemeBtn theme={theme}>
          <ThemeIcon>{theme.theme === 'dark' ? '🌙' : '🌞'}</ThemeIcon>
        </ThemeBtn>
      </ThemeBox>
    </ThemeContainer>
  );
};