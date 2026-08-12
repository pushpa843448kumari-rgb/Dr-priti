import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
          {
            "bg-[#0D9488] text-white shadow-md hover:bg-[#0B7A70]": variant === "default",
            "border-2 border-slate-200 text-slate-700 hover:bg-slate-50": variant === "outline",
            "hover:bg-slate-100 text-slate-700": variant === "ghost",
            "underline-offset-4 hover:underline text-[#0D9488]": variant === "link",
            "h-10 py-2 px-5 rounded-full text-sm": size === "default",
            "h-9 px-4 rounded-full text-xs": size === "sm",
            "h-12 px-6 rounded-xl text-base": size === "lg",
            "h-10 w-10 rounded-full": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
