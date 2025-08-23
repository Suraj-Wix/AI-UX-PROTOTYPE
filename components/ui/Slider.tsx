import React from "react";

type SliderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  minLabel?: string;
  maxLabel?: string;
};

export const Slider: React.FC<SliderProps> = ({ label, minLabel, maxLabel, ...props }) => {
  const id = React.useId();
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium mb-1">{label}</label>
      <input
        id={id}
        type="range"
        className="w-full accent-brand"
        {...props}
      />
      <div className="flex justify-between text-xs text-zinc-500">
        <span>{minLabel ?? props.min}</span>
        <span>{props.value}</span>
        <span>{maxLabel ?? props.max}</span>
      </div>
    </div>
  );
};