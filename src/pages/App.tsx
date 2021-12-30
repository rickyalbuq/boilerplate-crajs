import React from 'react';
import Text from 'components/Text';

import GlobalStyles from 'styles/globals';
import { Container } from 'styles/common';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as ContextTheme, useTheme } from 'context/ThemeContext';

function App() {
  const { themeSelected } = useTheme();

  return (
    <ContextTheme>
      <ThemeProvider theme={themeSelected}>
        <GlobalStyles />
        <Container>
          <Text />
        </Container>
      </ThemeProvider>
    </ContextTheme>
  );
}

export default App;
