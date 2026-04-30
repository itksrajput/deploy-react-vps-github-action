import {
  DashboardIcon,
  PersonIcon,
  GearIcon,
  LayersIcon,
  ImageIcon,
  CalendarIcon,
  FileTextIcon,
  IdCardIcon,
  BoxIcon,
  FaceIcon,
} from "@radix-ui/react-icons";
import type { MenuItem, Role } from "..";

export const MainMenus: Record<Role, MenuItem[]> = {
  client: [
    {
      label: "Dashboard",
      icon: DashboardIcon,
      path: "/dashboard",
    },
    {
      label: "Customers",
      icon: PersonIcon,
      path: "/customers",
    },
    {
      label: "Bookings",
      icon: CalendarIcon,
      path: "/bookings",
    },
    {
      label: "Services",
      icon: LayersIcon,
      path: "/services",
    },
    {
      label: "Gallery",
      icon: ImageIcon,
      path: "/gallery",
    },
    {
      label: "Category",
      icon: BoxIcon,
      path: "/categories",
    },
    {
      label: "Settings",
      icon: GearIcon,
      path: "/settings",
    },
  ],

  admin: [
    {
      label: "Dashboard",
      icon: DashboardIcon,
      path: "/dashboard",
      children: [
        {
          label: "User Overview",
          path: "/about",
          icon: FaceIcon,
          role: ["admin"],
        },
        {
          label: "Client Overview",
          path: "/dashboard/clients",
          icon: IdCardIcon,
          role: ["admin"],
        },
      ],
    },
    {
      label: "Client Management",
      icon: IdCardIcon,
      path: "/clients",
    },
    {
      label: "Category Management",
      icon: BoxIcon,
      path: "/admin/categories",
    },
    {
      label: "Role Management",
      icon: FileTextIcon,
      path: "/roles",
    },
    {
      label: "Settings",
      icon: GearIcon,
      path: "/settings",
    },
  ],
};
