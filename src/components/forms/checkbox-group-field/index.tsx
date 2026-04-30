import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Form from "@radix-ui/react-form";
import type { UseFormRegisterReturn, FieldError, Merge } from "react-hook-form";
import cn from "../../../utils/cn"; // adjust based on your utils
import { useState } from "react";
import { Typography } from "../../common/typography";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  options: Option[];
  selectedValues?: string[];
  error?:
    | FieldError
    | Merge<FieldError, (FieldError | undefined)[]>
    | undefined;
  description?: string;
  required?: boolean;
  disabled?: boolean;
};

export const CheckboxGroupField: React.FC<Props> = ({
  label,
  name,
  register,
  options,
  selectedValues = [],
  error,
  description,
  required = false,
  disabled = false,
}) => {
  const [values, setValues] = useState<string[]>(selectedValues);
  const inputId = `${name}-input`;
  const descriptionId = `${name}-description`;
  const errorId = `${name}-error`;
  const describedBy =
    [description ? descriptionId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const handleChange = (checked: boolean, optionValue: string) => {
    const updated = checked
      ? [...values, optionValue]
      : values.filter((v) => v !== optionValue);

    setValues(updated);

    // react-hook-form expects an event-like object
    register.onChange({
      target: {
        name: register.name,
        value: updated,
      },
    });
  };

  return (
    <Form.Field className="mb-5" name={name}>
      <Form.Label htmlFor={inputId} className="mb-1 block">
        <Typography as="span">{label}</Typography>
        {required && (
          <Typography as={"span"} className="text-red ml-1">
            *
          </Typography>
        )}
      </Form.Label>

      {description && (
        <Typography id={descriptionId} variant="small" className="mb-1">
          {description}
        </Typography>
      )}

      <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {options.map((option) => {
          const isChecked = values.includes(option.value);

          return (
            <div key={option.value} className="flex items-start space-x-2">
              <Checkbox.Root
                checked={isChecked}
                onCheckedChange={(checked) =>
                  handleChange(checked === true, option.value)
                }
                ref={register.ref}
                onBlur={register.onBlur}
                aria-invalid={!!error}
                aria-required={required}
                aria-disabled={disabled}
                aria-describedby={describedBy}
                disabled={disabled || option.disabled}
                className={cn(
                  "h-5 w-5 rounded border border-gray-medium shrink-0 flex items-center justify-center",
                  isChecked && "bg-primary text-white",
                  option.disabled && "opacity-60 cursor-not-allowed",
                  error && "border-red"
                )}
              >
                <Checkbox.Indicator>
                  <CheckIcon className="h-4 w-4 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Root>

              <Form.Label className="text-sm text-gray-700">
                <Typography> {option.label}</Typography>
              </Form.Label>
            </div>
          );
        })}
      </div>

      <Form.Message id={errorId} role="alert" aria-live="polite">
        <Typography
          variant="small"
          className={cn(
            "mt-1 block transition-opacity min-h-5",
            error ? "text-red opacity-100" : "text-transparent opacity-0"
          )}
        >
          {Array.isArray(error)
            ? error
                .filter(Boolean)
                .map((e) => e?.message)
                .join(", ")
            : error?.message || " "}
        </Typography>
      </Form.Message>
    </Form.Field>
  );
};
