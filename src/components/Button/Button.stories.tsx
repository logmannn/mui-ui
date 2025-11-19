import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "outlined", "contained"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "error", "info", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "contained",
    color: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "contained",
    color: "secondary",
  },
};

export const Outlined: Story = {
  args: {
    label: "Outlined Button",
    variant: "outlined",
    color: "primary",
  },
};

export const Text: Story = {
  args: {
    label: "Text Button",
    variant: "text",
    color: "primary",
  },
};

export const Small: Story = {
  args: {
    label: "Small Button",
    variant: "contained",
    color: "primary",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    variant: "contained",
    color: "primary",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    variant: "contained",
    color: "primary",
    disabled: true,
  },
};

