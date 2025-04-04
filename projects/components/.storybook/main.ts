import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-designs",
    '@storybook/addon-docs'
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  // "webpackFinal": async (config: any) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: ['style-loader', 'css-loader','postcss-loader', 'sass-loader']
  //   });
  //   return config;
  // }
};
export default config;