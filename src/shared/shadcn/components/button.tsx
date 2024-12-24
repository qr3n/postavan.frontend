'use client';

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { forwardRef, useRef } from "react";
import { Ripple, useRipple } from "@nextui-org/ripple";

const buttonVariants = cva(
    "inline-flex active:scale-95 transition-all items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-blue-500 text-primary-foreground shadow hover:bg-blue-500/90 text-white",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                    "border border-input bg-background shadow-sm dark:border-[#444] dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80 hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2 rounded-full",
                sm: "h-8 rounded-full px-3 text-xs",
                lg: "h-10 rounded-full px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, onClick, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        const { ripples, onClear, onPress } = useRipple();
        const rippleLeftRef = useRef<number>(0);

        const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
            const button = event.currentTarget;
            const rect = button.getBoundingClientRect();

            // Вычисление центра кнопки
            const centerX = rect.left + rect.width / 2;

            rippleLeftRef.current = event.clientX - centerX;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onPress(event);

            if (onClick) onClick(event);
        };

        return (
            <Comp
                onMouseDown={handleMouseDown}
                className={cn(buttonVariants({ variant, size, className }))}
                style={{ position: "relative", overflow: "hidden" }}
                {...props}
                ref={ref}
                disabled={props.isLoading || props.disabled}
            >
                {props.isLoading ? (
                    <>
                        {props.children} <Loader2 className="text-white h-4 ml-2 w-4 animate-spin" />
                    </>
                ) : (
                    props.children
                )}
                <Ripple
                    style={{ position: "absolute", left: `${rippleLeftRef.current}px`, top: `-20px` }}
                    ripples={ripples}
                    onClear={onClear}
                />
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
