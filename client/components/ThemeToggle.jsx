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
      <ThemeBox title='themeToggle' onClick={() => updateTheme(theme)} theme={theme}>
        <ThemeBtn theme={theme}>
          <ThemeIcon title='themeIcon'>{theme.theme === 'dark' ? '🌙' : '🌞'}</ThemeIcon>
        </ThemeBtn>
      </ThemeBox>
  );
};