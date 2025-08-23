import React from "react";
import { Layout } from "../components/Layout";
import { ModelSelector } from "../components/ModelSelector";
import { ParametersPanel } from "../components/ParametersPanel";
import { PromptEditor } from "../components/PromptEditor";
import { OutputArea } from "../components/OutputArea";
import { useTheme } from "../contexts/ThemeContext";
import { Toggle } from "../components/ui/Toggle";
import { Sun, Moon } from "lucide-react";

export default function Home() {
  const { theme, toggle } = useTheme();
  const sidebar = (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold">Theme</span>
        <Toggle pressed={theme === "dark"} onPressedChange={toggle} label={theme === "dark" ? "Dark" : "Light"} />
      </div>
      <ModelSelector />
      <ParametersPanel />
    </div>
  );
  return (
    <Layout sidebar={sidebar}>
      <div className="space-y-6">
        <PromptEditor />
        <div className="border-t pt-4">
          <OutputArea />
        </div>
      </div>
    </Layout>
  );
}