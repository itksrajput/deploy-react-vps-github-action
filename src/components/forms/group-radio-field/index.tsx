import * as RadioGroup from "@radix-ui/react-radio-group";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { Typography } from "../../common/typography";

type Option = {
  label: string;
  value: string;
  disabled?: boolean;
};

type Props = {
  label: string;
  name: string;
  options: Option[];
  register: UseFormRegisterReturn;
  error?: FieldError;
  description?: string;
  required?: boolean;
  disabled?: boolean;
};

export const RadioGroupField: React.FC<Props> = ({
  label,
  name,
  options,
  register,
  error,
  description,
  required = false,
  disabled = false,
}) => {
  return (
    <div className="mb-5">
      {label && (
        <label className=" mb-1 block">
          <Typography as="span">{label}</Typography>
          {required && (
            <Typography as={"span"} className="text-red ml-1">
              *
            </Typography>
          )}
        </label>
      )}

      {description && (
        <p className="text-xs text-gray-500 mb-1">{description}</p>
      )}

      <RadioGroup.Root
        {...register}
        className="flex items-center gap-3"
        disabled={disabled}
      >
        {options.map((opt) => (
          <div key={opt.value} className="flex items-center space-x-3">
            <RadioGroup.Item
              value={opt.value}
              id={`${name}-${opt.value}`}
              className="w-4 h-4 rounded-full border border-gray-medium
                        data-[state=checked]:border-primary 
                        data-[state=checked]:bg-yeborder-primary 
                        flex items-center justify-center 
                        focus:outline-none focus:ring-0 focus:ring-yeborder-primary 
                        disabled:opacity-50 disabled:cursor-not-allowed "
              disabled={opt.disabled || disabled}
            >
              <RadioGroup.Indicator className="w-2 h-2 bg-primary rounded-full" />
            </RadioGroup.Item>
            <label htmlFor={`${name}-${opt.value}`}>
              <Typography> {opt.label}</Typography>
            </label>
          </div>
        ))}
      </RadioGroup.Root>

      <Typography
        variant="small"
        className={` mt-1 ${error ? "text-red" : "text-transparent"}`}
      >
        {error?.message || " "}
      </Typography>
    </div>
  );
};
