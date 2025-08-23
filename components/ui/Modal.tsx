import React from "react";
import { Button } from "./Button";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  action?: { label: string; onClick: () => void };
};
export const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, action }) => {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-soft w-full max-w-lg p-6 mx-4">
        {title && <h2 className="text-lg font-semibold mb-3">{title}</h2>}
        <div className="mb-4">{children}</div>
        <div className="flex justify-end gap-2">
          <Button variant="ghost" onClick={onClose} aria-label="Close modal">Cancel</Button>
          {action && <Button onClick={action.onClick}>{action.label}</Button>}
        </div>
      </div>
    </div>
  );
};