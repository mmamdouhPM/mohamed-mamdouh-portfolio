import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-semibold transition-all duration-200 ease-out-expo focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brass text-ink hover:bg-brass-bright hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(201,151,63,0.4),0_12px_24px_rgba(201,151,63,0.16)]",
        secondary:
          "bg-transparent border border-hairline text-bone hover:border-brass/40 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.35)]",
        ghost: "bg-transparent text-bone hover:text-brass",
      },
      size: {
        default: "px-6 py-3.5",
        sm: "px-4 py-2 text-xs",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
