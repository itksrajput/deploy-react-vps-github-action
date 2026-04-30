import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
} from "@radix-ui/react-icons";
import * as Form from "@radix-ui/react-form";
import cn from "../../../utils/cn"; // Adjust this path
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Typography } from "../../common/typography";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  label: string;
  options: Option[];
  register: UseFormRegisterReturn;
  value?: string;
  required?: boolean;
  error?: FieldError;
  description?: string;
} & React.TextareaHTMLAttributes<HTMLSelectElement>;

export const SelectField: React.FC<Props> = ({
  label,
  options,
  register,
  value,
  error,
  description,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = React.useState(value ?? "");
  const name = rest.name || "";
  const selectId = rest.id || `${rest.name}-textarea`;
  const descriptionId = `${rest.name}-description`;
  const errorId = `${rest.name}-error`;

  const describedBy =
    [description ? `${name}-description` : null, error ? `${name}-error` : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const handleChange = (val: string) => {
    setSelectedValue(val);
    register.onChange({ target: { name: register.name, value: val } });
  };

  return (
    <Form.Field className="mb-1 w-full" name={name}>
      <Form.Label htmlFor={selectId} className="mb-1 block">
        <Typography as="span">{label}</Typography>
        {rest.required && (
          <Typography as="span" className="text-red ml-1">
            *
          </Typography>
        )}
      </Form.Label>

      {description && (
        <Typography id={descriptionId} variant="small" className="mb-1">
          {description}
        </Typography>
      )}
      <SelectPrimitive.Root
        value={selectedValue}
        onValueChange={handleChange}
        disabled={rest.disabled}
      >
        <SelectPrimitive.Trigger
          className={cn(
            "w-full px-3 py-2 text-sm border rounded flex justify-between items-center",
            rest.disabled && "bg-gray opacity-80 cursor-not-allowed",
            error ? "border-red focus:ring-red" : "border-gray-medium "
          )}
          aria-describedby={describedBy}
          aria-invalid={!!error}
          aria-required={rest.required}
          aria-disabled={rest.disabled}
          ref={register.ref}
          onBlur={register.onBlur}
        >
          <SelectPrimitive.Value placeholder={rest.placeholder} />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            className="z-50  bg-white border border-gray-medium rounded shadow-md  max-h-64 w-[var(--radix-select-trigger-width)]  overflow-auto"
            position="popper"
            sideOffset={5}
          >
            <SelectPrimitive.ScrollUpButton className="p-1 text-gray-dark">
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>

            <SelectPrimitive.Viewport className="p-1 w-full">
              {options.map((option) => (
                <SelectPrimitive.Item
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                  className={cn(
                    "w-full flex items-center text-sm px-3 py-2 rounded cursor-pointer focus:outline-none",
                    "data-[highlighted]:bg-gray-100",
                    "data-[disabled]:text-gray-400 data-[disabled]:cursor-not-allowed"
                  )}
                >
                  <SelectPrimitive.ItemText className="flex-1 truncate w-full">
                    <Typography className="">{option.label}</Typography>
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <CheckIcon className="ml-2 w-4 h-4" />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.Viewport>

            <SelectPrimitive.ScrollDownButton className="p-1 text-gray-dark">
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>

      <Form.Message id={errorId} role="alert" aria-live="polite">
        <Typography
          variant="small"
          className={cn(
            "mt-1 block transition-opacity min-h-5",
            error ? "text-red opacity-100" : "text-transparent opacity-0"
          )}
        >
          {error?.message || " "}
        </Typography>
      </Form.Message>
    </Form.Field>
  );
};
