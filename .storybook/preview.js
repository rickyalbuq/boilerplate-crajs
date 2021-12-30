import GlobalStyles from 'styles/globals';
import { WithThemeProvider } from 'storybook-addon-styled-components-themes';

import light from 'styles/themes/light';
import dark from 'styles/themes/dark';


export const decorators = [
  (Story) => (
    <WithThemeProvider>
      <GlobalStyles />
      <Story />
    </WithThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  styledComponentsThemes: {
    themes: [light, dark],
    initialTheme: 1,
    label: 'name'
  }
}
