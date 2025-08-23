import React, { useEffect, useState } from "react";
import { useSession } from "../contexts/SessionContext";
import type { Model } from "../contexts/SessionContext";

export const ModelSelector: React.FC = () => {
  const { model, setModel } = useSession();
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/models");
        const data = await res.json();
        setModels(data.models);
        if (!model && data.models.length) setModel(data.models[0]);
      } finally { setLoading(false); }
    };
    run();
  }, [setModel, model]);

  return (
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="model">Model</label>
      <select
        id="model"
        aria-label="Model selector"
        value={model?.id || ""}
        onChange={(e) => setModel(models.find(m => m.id === e.target.value) || null)}
        className="w-full rounded-2xl border bg-white dark:bg-zinc-900 p-2"
      >
        {loading ? <option>Loading...</option> : models.map(m => (
          <option key={m.id} value={m.id}>{m.name}</option>
        ))}
      </select>
      <p className="text-xs text-zinc-500 mt-1">Choose a model to simulate responses.</p>
    </div>
  );
};