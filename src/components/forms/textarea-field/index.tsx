import * as React from "react";
import * as Form from "@radix-ui/react-form";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import cn from "../../../utils/cn";
import { Typography } from "../../common/typography";

type Props = {
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  description?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField: React.FC<Props> = ({
  label,
  error,
  register,
  description,
  ...rest
}) => {
  const name = rest.name || "";
  const textareaId = rest.id || `${rest.name}-textarea`;
  const descriptionId = `${rest.name}-description`;
  const errorId = `${rest.name}-error`;

  const describedBy =
    [description ? descriptionId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <Form.Field className="mb-5" name={name}>
      {label && (
        <Form.Label htmlFor={textareaId} className="mb-1 block">
          <Typography as="span">{label}</Typography>
          {rest.required && (
            <Typography as="span" className="text-red ml-1">
              *
            </Typography>
          )}
        </Form.Label>
      )}

      {description && (
        <Typography id={descriptionId} variant="small" className="mb-1">
          {description}
        </Typography>
      )}

      <Form.Control asChild>
        <textarea
          {...register}
          {...rest}
          id={textareaId}
          aria-invalid={!!error}
          aria-required={rest.required}
          aria-disabled={rest.disabled}
          aria-describedby={describedBy}
          className={cn(
            "w-full border rounded px-3 py-2 text-sm outline-none min-h-[100px] resize-y",
            rest.disabled && "bg-gray-100 cursor-not-allowed opacity-80",
            error ? "border-red focus:ring-red" : "border-gray-medium"
          )}
        />
      </Form.Control>

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
