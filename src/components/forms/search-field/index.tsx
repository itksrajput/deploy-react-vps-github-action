import * as React from "react";
import * as Form from "@radix-ui/react-form";
import { MagnifyingGlassIcon, Cross2Icon } from "@radix-ui/react-icons";
import cn from "../../../utils/cn";

type Props = {
  value: string;
  onDebouncedChange: (val: string) => void;
  delay?: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const SearchField: React.FC<Props> = ({
  value,
  onDebouncedChange,
  delay = 500,
  ...rest
}) => {
  const [input, setInput] = React.useState(value);
  const name = rest.name || "";

  React.useEffect(() => {
    const handler = setTimeout(() => {
      onDebouncedChange(input);
    }, delay);

    return () => clearTimeout(handler);
  }, [input, onDebouncedChange, delay]);

  const clearInput = () => setInput("");

  return (
    <Form.Field name={name} className="relative w-full">
      <Form.Control asChild>
        <input
          {...rest}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={cn(
            "w-full border rounded-full pl-9 pr-8 py-2 text-sm outline-none transition",
            rest.disabled && "bg-gray  cursor-not-allowed opacity-80",
            "border-gray-medium focus:ring-1 focus:ring-black"
          )}
        />
      </Form.Control>

      {/* Search Icon */}
      <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-4 w-4 text-black" />

      {/* Clear Button */}
      {input && (
        <button
          type="button"
          onClick={clearInput}
          className="absolute right-2 top-2.5 text-gray-medium hover:text-gray-dark"
        >
          <Cross2Icon className="h-4 w-4" />
        </button>
      )}
    </Form.Field>
  );
};
