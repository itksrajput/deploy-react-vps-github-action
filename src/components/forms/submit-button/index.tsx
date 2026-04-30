import * as Form from "@radix-ui/react-form";
import React from "react";

type SubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
};

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  className = "",
  disabled = false,
  loading = false,
}) => {
  return (
    <Form.Submit asChild>
      <button
        type="submit"
        disabled={disabled || loading}
        className={`flex items-center justify-center gap-2 bg-amber-500 text-black rounded-lg px-5 py-3 cursor-pointer ${className}`}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
        )}
        {children}
      </button>
    </Form.Submit>
  );
};
