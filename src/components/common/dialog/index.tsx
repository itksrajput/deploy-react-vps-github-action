import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import cn from "../../../utils/cn";

type DialogProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
};

export const CustomDialog: React.FC<DialogProps> = ({
  title,
  description,
  children,
  open,
  onOpenChange,
  trigger,
}) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
        <DialogPrimitive.Content
          className={cn(
            "fixed z-50 top-1/2 left-1/2 max-h-[90vh] w-[90vw] max-w-md",
            "translate-x-[-50%] translate-y-[-50%] bg-white p-6 rounded-lg shadow-lg"
          )}
        >
          {title && (
            <DialogPrimitive.Title className="text-lg font-semibold mb-2">
              {title}
            </DialogPrimitive.Title>
          )}
          {description && (
            <DialogPrimitive.Description className="text-sm text-gray-500 mb-4">
              {description}
            </DialogPrimitive.Description>
          )}

          {children}

          <DialogPrimitive.Close asChild>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
