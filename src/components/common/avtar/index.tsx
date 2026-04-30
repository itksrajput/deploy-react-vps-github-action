// components/ui/Avatar.tsx
import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import cn from "../../../utils/cn";

interface AvatarProps {
  src?: string;
  alt?: string;
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "md:w-10 md:h-10 md:text-base  w-8 h-8 text-sm",
  lg: "w-14 h-14 text-lg",
};

export const CustomAvatar: React.FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  name,
  size = "md",
  className,
}) => {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <AvatarPrimitive.Root
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-light select-none",
        sizeClasses[size],
        className
      )}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <AvatarPrimitive.Fallback
        delayMs={600}
        className="flex items-center justify-center w-full h-full text-gray-600 font-medium"
      >
        {initials}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};
