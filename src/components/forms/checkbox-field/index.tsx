import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Form from "@radix-ui/react-form";
import cn from "../../../utils/cn";
import type { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { useState } from "react";

type Props = {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  required?: boolean;
  description?: string;
  disabled?: boolean;
};

export const CheckboxField: React.FC<Props> = ({
  label,
  name,
  register,
  error,
  required = false,
  description,
  disabled = false,
}) => {
  const [checked, setChecked] = useState(false);

  const descriptionId = `${name}-description`;
  const errorId = `${name}-error`;
  const describedBy =
    [description ? descriptionId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <Form.Field className="mb-5" name={name}>
      <div className="flex items-start space-x-2">
        <CheckboxPrimitive.Root
          id={name}
          checked={checked}
          onCheckedChange={(val) => {
            const boolValue = val === true;
            setChecked(boolValue);
            register.onChange({
              target: { name: register.name, value: boolValue },
            });
          }}
          onBlur={register.onBlur}
          ref={register.ref}
          aria-invalid={!!error}
          aria-required={required}
          aria-disabled={disabled}
          aria-describedby={describedBy}
          disabled={disabled}
          className={cn(
            "h-5 w-5 shrink-0 rounded border border-gray-medium data-[state=checked]:bg-primary data-[state=checked]:text-white focus:outline-none",
            disabled && "bg-gray-100 opacity-70 cursor-not-allowed",
            error && "border-red-500"
          )}
        >
          <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
            <CheckIcon className="h-4 w-4 text-white" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        <div className="flex flex-col">
          <Form.Label
            htmlFor={name}
            className="text-sm font-medium text-gray-700"
          >
            {label} {required && <span className="text-red-500">*</span>}
          </Form.Label>
          {description && (
            <p id={descriptionId} className="text-xs text-gray-500">
              {description}
            </p>
          )}
          {error && (
            <Form.Message
              id={errorId}
              role="alert"
              aria-live="polite"
              className="text-xs text-red-500"
            >
              {error.message}
            </Form.Message>
          )}
        </div>
      </div>
    </Form.Field>
  );
};
