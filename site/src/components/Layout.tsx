// import { useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import clsx from "clsx";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_300px] 2xl:grid-cols-[200px_1fr_400px] min-[1680px]:grid-cols-[300px_1fr_500px]">
      <div className="hidden lg:block bg-[#101010]"></div>

      <div className="flex flex-1">
        <div
          className={clsx(
            "lg:static lg:block lg:w-auto lg:h-auto z-50",
            showSidebar
              ? "fixed top-0 left-0 w-screen h-screen"
              : "hidden"
          )}
        >
          <Sidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </div>
        <div className="flex-1 min-h-[100dvh] bg-neutral-900">
          <Header
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          <div className="flex gap-x-5">
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-neutral-900 border-l border-l-neutral-800"></div>
    </div>
  );
}
