import * as Form from "@radix-ui/react-form";
import { unstable_PasswordToggleField as PasswordToggleField } from "radix-ui";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import cn from "../../../utils/cn";
import { Typography } from "../../common/typography";

type Props = {
  label: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
  description?: string;
  autoComplete?: "current-password" | "new-password"; // radix ui accepct only these
} & React.InputHTMLAttributes<HTMLInputElement>;

export const PasswordField: React.FC<Props> = ({
  label,
  error,
  register,
  description,
  autoComplete = "current-password",
  ...rest
}) => {
  const inputId = rest.id || `${rest.name}-password`;
  const descriptionId = `${name}-description`;
  const errorId = `${name}-error`;

  const describedBy =
    [description ? descriptionId : null, error ? errorId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <Form.Field className="mb-5" name={rest.name || ""}>
      {label && (
        <Form.Label htmlFor={inputId} className="mb-1 block">
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
        <PasswordToggleField.Root>
          <div className="relative">
            <PasswordToggleField.Input
              {...register}
              id={inputId}
              aria-invalid={!!error}
              aria-required={rest.required}
              aria-disabled={rest.disabled}
              aria-describedby={describedBy}
              autoComplete={autoComplete}
              {...rest}
              className={cn(
                "w-full border rounded px-3 py-2 pr-10 text-sm outline-none",
                rest.disabled && "bg-gray-100 cursor-not-allowed opacity-80",
                error ? "border-red focus:ring-red" : "border-gray-medium "
              )}
            />

            <PasswordToggleField.Toggle
              id={`${inputId}-btn`}
              className="absolute inset-y-0 right-2 flex items-center text-gray-medium hover:text-gray-dark"
              aria-label="Toggle password visibility"
            >
              <PasswordToggleField.Icon
                visible={<EyeOpenIcon />}
                hidden={<EyeClosedIcon />}
              />
            </PasswordToggleField.Toggle>
          </div>
        </PasswordToggleField.Root>
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
