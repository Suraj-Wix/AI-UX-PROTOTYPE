import React from "react";

type ToggleProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean;
  onPressedChange?: (v: boolean) => void;
  label?: string;
};
export const Toggle: React.FC<ToggleProps> = ({ pressed, onPressedChange, label, ...props }) => {
  const [p, setP] = React.useState(!!pressed);
  React.useEffect(()=> setP(!!pressed), [pressed]);
  const toggle = () => {
    const v = !p; setP(v); onPressedChange?.(v);
  };
  return (
    <button
      type="button"
      aria-pressed={p}
      aria-label={label || "toggle"}
      onClick={toggle}
      className={"inline-flex items-center gap-2 rounded-2xl px-3 h-9 text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"}
      {...props}
    >
      <span className={"w-5 h-5 rounded-full border flex items-center justify-center " + (p ? "bg-brand border-brand" : "bg-white dark:bg-zinc-900 border-zinc-300 dark:border-zinc-700")}></span>
      {label}
    </button>
  );
};