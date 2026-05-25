import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "font-medium transition-all duration-300 rounded-sm hover:scale-105";

  const variants = {
    primary:
      "bg-luxury-plum text-white hover:shadow-lg hover:bg-opacity-90",
    secondary:
      "border border-luxury-plum text-luxury-plum bg-transparent hover:bg-cream-warm",
    ghost: "text-luxury-plum hover:underline",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-12 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
