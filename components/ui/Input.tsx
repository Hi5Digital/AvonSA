import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-luxury-charcoal mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 border border-gray-300 rounded-sm",
          "focus:outline-none focus:border-luxury-plum focus:ring-1 focus:ring-luxury-plum",
          "transition-all duration-300",
          "placeholder-luxury-taupe",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
