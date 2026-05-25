import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  noBorder?: boolean;
}

const Card = ({ children, className, noBorder = false, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-sm p-6 transition-all duration-300",
        !noBorder && "border border-gray-200 hover:border-luxury-plum hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
