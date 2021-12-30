module.exports = {
  "stories": [
    "../src/components/**/stories.tsx",
    "../src/pages/**/stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-styled-components-themes/register"
  ],
  "framework": "@storybook/react"
}
