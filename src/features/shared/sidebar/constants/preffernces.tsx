import { DashboardIcon, PersonIcon, GearIcon } from "@radix-ui/react-icons";
import type { MenuItem, Role } from "..";

export const PrefferncesMenus: Record<Role, MenuItem[]> = {
  client: [
    {
      label: "Dashboard",
      icon: DashboardIcon,
      path: "/dashboard",
    },
  ],

  admin: [
    {
      label: "Online Profile",
      icon: PersonIcon,
      path: "/profile",
    },
    {
      label: "Account Setting",
      icon: GearIcon,
      path: "/account-setting",
    },
  ],
};
