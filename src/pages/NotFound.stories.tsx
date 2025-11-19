import type { Meta, StoryObj } from "@storybook/react";
import { NotFound } from "./NotFound";
import { MemoryRouter } from "react-router-dom";

const meta = {
  title: "Pages/NotFound",
  component: NotFound,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

