import { Typography } from "../../../components/common/typography";
import { SidebarItem } from "./sidebar-item";
import { MainMenus } from "./constants/main-menu";
import { PrefferncesMenus } from "./constants/preffernces";

export type Role = "admin" | "client";
export interface SubMenuItem {
  label: string;
  path: string;
  icon: React.ElementType;
  role?: Role[];
}
export interface MenuItem {
  label: string;
  path?: string;
  icon: React.ElementType;
  role?: Role[];
  children?: SubMenuItem[];
}

interface SidebarProps {
  role?: Role;
}

const Sidebar = ({ role = "admin" }: SidebarProps) => {
  const menusMain = (MainMenus[role] || [])
    .filter((item) => !item.role || item.role.includes(role))
    .map((item) => {
      if (!item.children) return item;

      const filteredChildren = item.children.filter(
        (child) => !child.role || child.role.includes(role)
      );

      return {
        ...item,
        children: filteredChildren,
      };
    })
    .filter((item) => !item.children || item.children.length > 0);

  const menusPreffernces = (PrefferncesMenus[role] || [])
    .filter((item) => !item.role || item.role.includes(role))
    .map((item) => {
      if (!item.children) return item;

      const filteredChildren = item.children.filter(
        (child) => !child.role || child.role.includes(role)
      );

      return {
        ...item,
        children: filteredChildren,
      };
    })
    .filter((item) => !item.children || item.children.length > 0);

  return (
    <aside className="w-60 min-h-screen bg-white hidden lg:block shadow-lg p-4">
      <Typography variant="h5" className="text-primary mb-5 px-4 py-2">
        LOGO V7
      </Typography>
      <div className="space-y-2 border-b border-gray-200">
        <Typography variant="small" as={"p"} className="px-4 py-2 my-2 ">
          MAIN MENU
        </Typography>
        <nav className="">
          {menusMain.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </nav>
      </div>

      <div className="space-y-2 mt-5">
        <Typography variant="small" as={"p"} className="px-4 py-2 my-2 ">
          PREFFRENCES
        </Typography>
        <nav className="">
          {menusPreffernces.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
