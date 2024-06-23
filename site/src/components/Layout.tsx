// import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // const { pathname } = useLocation();

  return (
    <div className="flex">
      <div className="lg:w-[300px] bg-[#101010]"></div>

      <div className="flex flex-1">
        <div>
          <Sidebar />
        </div>
        <div className="min-h-[100dvh] bg-neutral-900 w-full">
          <Header />
          <div className="flex gap-x-5">
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>

      <div className="lg:w-[300px] bg-neutral-900 border-l border-l-neutral-800"></div>
      <div className="lg:w-[300px] bg-neutral-900"></div>
    </div>
  );
}
