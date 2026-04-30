import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type DropdownProps = {
  trigger: React.ReactNode;
  items: React.ReactNode[];
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  className?: string;
};

const CustomDropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  className,
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        asChild
        className="focus-visible:outline-none focus-visible:ring-0"
      >
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className={
            className ??
            "min-w-[180px] bg-white border border-gray-light rounded shadow-sm p-1"
          }
        >
          {items.map((item, index) => (
            <DropdownMenu.Item
              key={index}
              className="px-3 py-2 hover:bg-gray-100  rounded text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-0"
            >
              {item}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default CustomDropdown;
