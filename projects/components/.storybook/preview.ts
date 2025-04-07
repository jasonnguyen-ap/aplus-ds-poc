import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { Meta, applicationConfig, StoryObj } from '@storybook/angular';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // Apply application config to all stories
    applicationConfig({
      // List of providers and environment providers that should be available to the root component and all its children.
      providers: [
        // Import application-wide providers from a module
        importProvidersFrom(BrowserAnimationsModule),
        // Or use provide-style functions if available instead, e.g.
        provideAnimations()
      ],
    }),
  ],
};

export default preview;