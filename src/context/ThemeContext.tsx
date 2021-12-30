import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from 'react';
import { DefaultTheme } from 'styled-components';
import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

type ThemeType = {
  [key: string]: DefaultTheme;
};

type themeContextType = {
  handleTheme(theme?: string): void;
  themeSelected: DefaultTheme;
  themes: ThemeType;
};

type Props = {
  children: ReactNode;
};

export const themes: ThemeType = {
  light: light,
  dark: dark
};

export const themeContextDefaultValues: themeContextType = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleTheme: () => {},
  themeSelected: dark,
  themes
};

const ThemeContext = createContext<themeContextType>(themeContextDefaultValues);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: Props) {
  const [themeSelected, setThemeSelected] = useState<DefaultTheme>(dark);

  const handleTheme = useCallback((theme: string) => {
    switch (theme) {
      case 'light':
        setThemeSelected(light);
        break;
      case 'dark':
        setThemeSelected(dark);
        break;
      default:
        setThemeSelected(dark);
    }
  }, []);

  const value = {
    handleTheme,
    themeSelected,
    themes
  };

  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
}
