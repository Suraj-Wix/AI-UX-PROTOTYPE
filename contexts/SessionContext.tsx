import React, { createContext, useContext, useMemo, useState } from "react";

type Message = { id: string; role: "user" | "assistant"; content: string; createdAt: number };
type Parameters = { temperature: number; maxTokens: number };
export type Model = { id: string; name: string; provider?: string };

type SessionContextValue = {
  model: Model | null;
  setModel: (m: Model) => void;
  params: Parameters;
  setParams: (p: Parameters) => void;
  messages: Message[];
  addMessage: (m: Omit<Message, "id" | "createdAt">) => void;
  clearMessages: () => void;
};

const defaultParams: Parameters = { temperature: 0.7, maxTokens: 512 };

const SessionContext = createContext<SessionContextValue | null>(null);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [model, setModel] = useState<Model | null>(null);
  const [params, setParams] = useState<Parameters>(defaultParams);
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (m: Omit<Message, "id" | "createdAt">) => {
    setMessages(prev => [{ id: crypto.randomUUID(), createdAt: Date.now(), ...m }, ...prev]);
  };
  const clearMessages = () => setMessages([]);

  const value = useMemo(() => ({ model, setModel, params, setParams, messages, addMessage, clearMessages }), [model, params, messages]);
  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
  const ctx = useContext(SessionContext);
  if (!ctx) throw new Error("useSession must be used within SessionProvider");
  return ctx;
};