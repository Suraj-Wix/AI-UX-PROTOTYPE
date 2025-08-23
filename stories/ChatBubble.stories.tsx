import type { Meta, StoryObj } from "storybook-react";
import { ChatBubble } from "../components/ChatBubble";

const meta: Meta<typeof ChatBubble> = {
  title: "Core/ChatBubble",
  component: ChatBubble
};
export default meta;
type Story = StoryObj<typeof ChatBubble>;

export const User: Story = { args: { role: "user", content: "Hello, assistant!" } };
export const Assistant: Story = { args: { role: "assistant", content: "Hello! How can I help?" } };