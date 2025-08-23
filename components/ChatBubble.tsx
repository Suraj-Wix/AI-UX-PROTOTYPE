import React from "react";

type Props = {
  role: "user" | "assistant";
  content: string;
};
export const ChatBubble: React.FC<Props> = ({ role, content }) => {
  const isUser = role === "user";
  return (
    <div className={"flex " + (isUser ? "justify-end" : "justify-start")}>
      <div
        className={
          "max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed shadow-soft " +
          (isUser ? "bg-brand text-white" : "bg-zinc-100 dark:bg-zinc-800")
        }
      >
        <p className="whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
};