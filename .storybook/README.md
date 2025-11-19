# Storybook Configuration

This project uses [Storybook](https://storybook.js.org/) for developing and documenting UI components in isolation.

## Features

- **MUI Theme Integration**: All stories are wrapped with the project's MUI ThemeProvider
- **i18n Support**: Internationalization is configured and available in all stories
- **Auto-docs**: Automatically generates documentation from component props
- **Interactive Controls**: Modify component props in real-time

## Running Storybook

Start the Storybook development server:

```bash
npm run storybook
```

This will start Storybook on [http://localhost:6006](http://localhost:6006)

## Building Storybook

Build a static version of Storybook for deployment:

```bash
npm run build-storybook
```

The built files will be in the `storybook-static` directory.

## Writing Stories

Create a `.stories.tsx` file next to your component:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "./YourComponent";

const meta = {
  title: "Category/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // your component props
  },
};
```

## Addons Included

- **@storybook/addon-links**: Link stories together
- **@storybook/addon-essentials**: Essential addons (Controls, Actions, Viewport, etc.)
- **@storybook/addon-interactions**: Test user interactions

