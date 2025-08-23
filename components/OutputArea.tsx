import React from "react";
import { useSession } from "../contexts/SessionContext";
import { ChatBubble } from "./ChatBubble";
import { Button } from "./ui/Button";
import { downloadJSON, copyToClipboard } from "../lib/download";

export const OutputArea: React.FC = () => {
  const { messages, clearMessages } = useSession();

  const handleCopyAll = async () => {
    const text = messages.slice().reverse().map(m => `${m.role.toUpperCase()}: ${m.content}`).join("\n\n");
    await copyToClipboard(text);
    alert("Copied conversation to clipboard.");
  };
  const handleDownload = () => {
    const data = messages.slice().reverse();
    downloadJSON("conversation.json", data);
  };

  if (messages.length === 0) {
    return <div className="text-sm text-zinc-500">No messages yet. Enter a prompt and press Run.</div>;
  }

  return (
    <div className="space-y-3">
      <div className="flex gap-2 justify-end">
        <Button variant="secondary" onClick={handleCopyAll} aria-label="Copy all">Copy</Button>
        <Button variant="secondary" onClick={handleDownload} aria-label="Download JSON">Download JSON</Button>
        <Button variant="ghost" onClick={clearMessages} aria-label="Clear conversation">Clear</Button>
      </div>
      <div className="space-y-2 max-h-[60vh] overflow-auto pr-1">
        {messages.map(m => <ChatBubble key={m.id} role={m.role} content={m.content} />)}
      </div>
    </div>
  );
};