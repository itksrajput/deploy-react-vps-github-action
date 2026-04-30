import type { ElementType, ReactNode } from "react";
import cn from "../../../utils/cn";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body"
  | "p"
  | "span"
  | "caption"
  | "small"
  | "muted";

interface TypographyProps {
  variant?: Variant;
  as?: ElementType;
  className?: string;
  children: ReactNode;
  id?: string | number;
}

const sizes: Record<Variant, string> = {
  h1: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight",
  h2: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight",
  h3: "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold",
  h4: "text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium",
  h5: "text-base md:text-lg lg:text-xl xl:text-2xl font-medium",
  h6: "text-sm md:text-base lg:text-lg xl:text-xl font-semibold",

  subtitle: "text-base md:text-lg lg:text-xl xl:text-2xl",
  body: "text-xs lg:text-sm  2xl:text-base font-medium text-text",
  p: "text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed  text-text",
  span: "text-base md:text-lg lg:text-xl xl:text-2xl",
  caption: "text-sm md:text-base lg:text-lg xl:text-xl",
  small: "text-xs  2xl:text-sm text-text font-normal",
  muted: "text-sm md:text-base lg:text-lg xl:text-xl",
};

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle: "p",
  body: "p",
  p: "p",
  span: "span",
  caption: "span",
  small: "small",
  muted: "span",
};

export const Typography = ({
  variant = "body",
  as,
  className,
  children,
  id,
}: TypographyProps) => {
  const Component: ElementType = as || tags[variant];
  const sizeClasses = sizes[variant];

  return (
    <Component id={id} className={cn(sizeClasses, className)}>
      {children}
    </Component>
  );
};
