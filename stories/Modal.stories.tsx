import type { Meta, StoryObj } from "storybook-react";
import React from "react";
import { Modal } from "../components/ui/Modal";
import { Button } from "../components/ui/Button";

const meta: Meta<typeof Modal> = {
  title: "UI/Modal",
  component: Modal
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Demo: Story = {
  render: () => {
    const [open, setOpen] = React.useState(true);
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Modal Title" action={{ label: "Confirm", onClick: () => setOpen(false) }}>
          Hello from a modal.
        </Modal>
      </div>
    );
  }
};