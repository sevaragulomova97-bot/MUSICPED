"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { burstFromEvent } from "@/lib/note-burst";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-hover",
        secondary: "bg-secondary text-white hover:opacity-90",
        soft: "bg-primary-soft text-primary hover:bg-primary-soft/70",
        outline: "border border-border-subtle bg-surface text-ink hover:bg-surface-muted",
        ghost: "text-ink-muted hover:bg-surface-muted hover:text-ink",
        danger: "bg-danger text-white hover:opacity-90",
        success: "bg-success text-white hover:opacity-90",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    /** Bosilganda notalar sachramasin (masalan juda tez bosiladigan joylarda) */
    noBurst?: boolean;
  };

/**
 * Tugma bosilganda undan notalar sachraydi — platformaning musiqiy
 * xarakterini interfeysga olib kiradi.
 *
 * Effekt `onClick` da emas, hodisa ro'yxatga olingan joyda chaqiriladi va
 * tashqaridan berilgan `onClick` dan **oldin** ishlaydi: shunda sahifa
 * almashsa ham sachrash boshlanib ulguradi. Effekt o'chirilgan bo'lsa yoki
 * tizimda «harakatni kamaytirish» yoqilgan bo'lsa, u umuman chizilmaydi.
 */
export function Button({ className, variant, size, noBurst, onClick, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={(event) => {
        if (!noBurst && !props.disabled) burstFromEvent(event);
        onClick?.(event);
      }}
      {...props}
    />
  );
}

export { buttonVariants };
