import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../shared/headers";
import Sidebar from "../shared/sidebar";
import MobileSidebar from "../shared/sidebar/mobile-index";
import cn from "../../utils/cn";

const MainLayout = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState<boolean>(false);

  return (
    <div className="h-screen w-dvw flex  overflow-hidden relative">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <div className="lg:hidden">
        {isMobileSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        <div
          className={cn(
            "fixed top-0 left-0 z-50 h-full w-60  shadow-lg transform transition-transform duration-300",
            isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <MobileSidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col w-full h-full">
        <Header onMenuClick={() => setIsMobileSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
