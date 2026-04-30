import { Link, useLocation } from "react-router-dom";
import cn from "../../../utils/cn";
import { Typography } from "../../../components/common/typography";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type Role = "admin" | "client";

interface SubMenuItem {
  label: string;
  path: string;
  icon: React.ElementType;
  role?: Role[];
}

interface MenuItem {
  label: string;
  path?: string;
  icon: React.ElementType;
  role?: Role[];
  children?: SubMenuItem[];
}

interface SidebarItemProps {
  item: MenuItem;
}

export const SidebarItem = ({ item }: SidebarItemProps) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const Icon = item.icon;

  if (item.children && item.children.length > 0) {
    const anyChildActive = item.children.some((child) => isActive(child.path));

    return (
      <div>
        <button
          className={cn(
            "flex items-center justify-between w-full fon px-4 py-2  text-left rounded hover:bg-gray-light",
            anyChildActive && " "
          )}
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center ">
            <Icon className="w-5 h-5 mr-2 text-text" />
            <Typography variant="body">{item.label}</Typography>
          </div>

          <ChevronDownIcon
            className={cn(
              "text-gray-dark transition-transform duration-800 ease-in-out",
              open && "rotate-180"
            )}
          />
        </button>

        {item.children && (
          <div
            className={cn(
              "ml-6 overflow-hidden transition-all duration-800",
              open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className="mt-1 space-y-1">
              {item.children.map((child, idx) => {
                const ChildIcon = child.icon;
                return (
                  <Link
                    key={idx}
                    to={child.path}
                    className={cn(
                      "flex items-center px-4 py-1 my-2  rounded hover:bg-gray-light"
                    )}
                  >
                    {ChildIcon && (
                      <ChildIcon
                        className={cn(
                          "w-4 h-4 mr-2",
                          isActive(child.path) && "text-primary"
                        )}
                      />
                    )}
                    <Typography
                      variant="body"
                      className={cn("", isActive(child.path) && "text-primary")}
                    >
                      {child.label}
                    </Typography>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.path!}
      className={cn(
        "flex items-center px-4 py-2 my-2 rounded hover:bg-gray-light",
        isActive(item.path!) && " "
      )}
    >
      <Icon
        className={cn(
          "w-5 h-5 mr-2 text-text",
          isActive(item.path!) && "text-primary"
        )}
      />
      <Typography
        variant="body"
        className={cn(isActive(item.path!) && "text-primary")}
      >
        {item.label}
      </Typography>
    </Link>
  );
};
