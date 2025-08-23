import React from "react";
import { useSession } from "../contexts/SessionContext";
import { Slider } from "./ui/Slider";

export const ParametersPanel: React.FC = () => {
  const { params, setParams } = useSession();
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">Parameters</h3>
      <Slider
        label={`Temperature (${params.temperature.toFixed(2)})`}
        aria-label="temperature"
        min={0} max={1} step={0.01}
        value={params.temperature}
        onChange={(e) => setParams({ ...params, temperature: parseFloat((e.target as HTMLInputElement).value) })}
        minLabel="0 (deterministic)"
        maxLabel="1 (creative)"
      />
      <Slider
        label={`Max Tokens (${params.maxTokens})`}
        aria-label="max tokens"
        min={32} max={2048} step={32}
        value={params.maxTokens}
        onChange={(e) => setParams({ ...params, maxTokens: parseInt((e.target as HTMLInputElement).value) })}
        minLabel="32" maxLabel="2048"
      />
    </div>
  );
};