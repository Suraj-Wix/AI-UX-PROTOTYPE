import type { Meta, StoryObj } from "storybook-react";
import { Slider } from "../components/ui/Slider";
import React from "react";

const meta: Meta<typeof Slider> = {
  title: "UI/Slider",
  component: Slider
};
export default meta;
type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  args: { label: "Temperature", min: 0, max: 1, step: 0.01, value: 0.5 }
};