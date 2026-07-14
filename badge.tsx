import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xs border border-hairline/60 px-2.5 py-1 font-mono text-[0.6875rem] text-fogdim",
        className
      )}
      {...props}
    />
  );
}
