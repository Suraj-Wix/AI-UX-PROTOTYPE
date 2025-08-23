import React, { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { useSession } from "../contexts/SessionContext";
import { copyToClipboard } from "../lib/download";
import { motion } from "framer-motion";

type Template = { id: string; name: string; content: string };

export const PromptEditor: React.FC = () => {
  const { addMessage } = useSession();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/templates");
      const data = await res.json();
      setTemplates(data.templates);
    })();
  }, []);

  const loadTemplate = (id: string) => {
    setSelected(id);
    const t = templates.find((t) => t.id === id);
    if (t) setPrompt(t.content);
  };

  const saveTemplate = () => {
    const name = prompt.slice(0, 24) || "Untitled";
    const t = { id: crypto.randomUUID(), name, content: prompt };
    const saved = JSON.parse(localStorage.getItem("savedTemplates") || "[]");
    saved.unshift(t);
    localStorage.setItem("savedTemplates", JSON.stringify(saved));
    alert("Saved locally!");
  };

  const handleRun = async () => {
    if (!prompt.trim()) return;
    // push user message
    addMessage({ role: "user", content: prompt });

    // simulate assistant response (frontend-only)
    const simulated =
      "🤖 (Simulated) " +
      prompt
        .split("\n")
        .map((s) => s.trim()) // ✅ FIXED (was .strip())
        .filter(Boolean)
        .slice(0, 3)
        .join(" ") +
      "\n\n" +
      "— Generated with temperature & randomness knobs. This is a static demo.";

    addMessage({ role: "assistant", content: simulated });
    setPrompt("");
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium" htmlFor="template">
          Template
        </label>
        <select
          id="template"
          aria-label="Template selector"
          className="rounded-2xl border bg-white dark:bg-zinc-900 p-2"
          value={selected}
          onChange={(e) => loadTemplate(e.target.value)}
        >
          <option value="">Select…</option>
          {templates.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        <Button
          variant="secondary"
          size="sm"
          onClick={saveTemplate}
          aria-label="Save template"
        >
          Save
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => copyToClipboard(prompt)}
          aria-label="Copy prompt"
        >
          Copy
        </Button>
      </div>
      <motion.textarea
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        id="prompt"
        aria-label="Prompt editor"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type your prompt here…"
        className="w-full min-h-[160px] rounded-2xl border p-3 bg-white dark:bg-zinc-900"
      />
      <div className="flex items-center gap-2">
        <Button onClick={handleRun} aria-label="Run prompt">
          Run
        </Button>
        <span className="text-xs text-zinc-500">
          This demo simulates responses.
        </span>
      </div>
    </div>
  );
};
