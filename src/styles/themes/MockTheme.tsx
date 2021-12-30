import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { themeContextDefaultValues } from 'context/ThemeContext';

type Props = {
  children: ReactNode;
};

const MockTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={themeContextDefaultValues.themeSelected}>
      {children}
    </ThemeProvider>
  );
};

export default MockTheme;
